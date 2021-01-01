import React, { memo, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import { useDispatch } from 'react-redux';
import uvDevice from '@uv-tech/util/lib/uv-device';

import './uv_bar-chart.css';
import { UVItem, UVAmount } from '../../shared/Types';
import { barChartColumnSelected } from './uv_bar-chart.actions';
import uvObject from '@uv-tech/util/lib/uv-object';

function UvBarChart(props: any) {
  const dispatch = useDispatch();

  let parentProps = {
    valueType: 'current',
    isAmountOnly : true,
    config: {
      id: 0,
      name: 'Liquid Fund',
      value: 0,
      isAmountOnly: true,
      color: '#6771dc',
      expenseRatio: 0.17
    }
  };

  let barConfig = props.config;
  let barData = props.data;

  const chart = useRef({});

  useEffect(() => {

    if(!barConfig || !barData) {
      return;
    }

    function getChartDimensions(chartDimension: string) {
      switch(chartDimension) {
        case '3D':
          return {
            chartType: am4charts.XYChart3D,
            columnType: new am4charts.ColumnSeries3D()
          }
        default:
          return {
            chartType: am4charts.XYChart,
            columnType: new am4charts.ColumnSeries()
          }
      }
    };
    function getProcessedData(items: UVItem[]) {
      for (const item of items) {
        const amountObj = item[parentProps.valueType] as UVAmount;
        if(!item) {
          console.error('Data format is incorrect for bar chart');
          return;
        }
        if(parentProps.isAmountOnly) {
          item.value = amountObj.amount;
        } else {
          item.value = amountObj.price * amountObj.quantity;
        }
      }
      return items;
    }


    const uvChart: am4charts.XYChart = am4core.create('barChartDiv', getChartDimensions(barConfig.dimension).chartType);
    uvChart.padding(40, 40, 40, 40);

    const categoryAxis = uvChart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.dataFields.category = barConfig.categoryKey;
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    const valueAxis = uvChart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = uvObject.getObjectByPath(barConfig, 'valueAxis', 'min', 0);

    const series = uvChart.series.push(getChartDimensions(barConfig.dimension).columnType);
    series.dataFields.categoryY = barConfig.categoryKey;
    series.dataFields.valueX = 'value';
    series.tooltipText = '{valueX.value}';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.propertyFields.id = 'id';

    const cursorStyle = uvObject.getObjectByPath(barConfig, 'series.column.template', 'cursorStyle', null);
    if(cursorStyle && cursorStyle === 'pointer') {
      series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    }

    const labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = 'left';
    labelBullet.label.dx = 10;
    labelBullet.label.text = '{values.valueX.workingValue.formatNumber("#.0as")}';
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add('fill', (fill, target) => {
      const dataItem = target.dataItem as am4core.DataItem;
      return uvChart.colors.getIndex(dataItem.index);
    });

    series.columns.template.events.on("hit", function(ev) {
      dispatch(barChartColumnSelected(props.componentId, parseInt(ev.target.id)));
    });

    categoryAxis.sortBySeries = series;

    const maxHeight = uvObject.getObjectByPath(barConfig, 'series.column.template', 'maxHeight', 0);
    if(maxHeight !== 0) {
      series.columns.template.maxHeight =  maxHeight;
    }

    if(uvDevice.isMobileDevice()) {
      categoryAxis.dataFields.category = barConfig.categoryShortKey;
      series.dataFields.categoryY = barConfig.categoryShortKey;
    }
    uvChart.data = getProcessedData(barData) as UVItem[];

    let selectedColumnIndex = 0;
    uvChart.data.reduce(function(prev: UVItem, current: UVItem, columnIndex: number) {
      if(current.value > prev.value) {
        selectedColumnIndex = columnIndex;
        return current;
      }
      return prev;
    });

    dispatch(barChartColumnSelected(props.componentId, selectedColumnIndex));

    chart.current = uvChart;

    return () => {
      uvChart.dispose();
    };
  }, [props.componentId, dispatch, barData, barConfig, parentProps]);

  return (
    <div className="bar-chart-container">
      <div id="barChartDiv"></div>
    </div>
  );
}

export default memo(UvBarChart);
