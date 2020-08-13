import React, { useLayoutEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import { useSelector } from 'react-redux';
import uvDevice from '@uv-tech/util/lib/uv-device';

import './uv-bar-chart.css';
import { UVRootState } from '../root-reducer';
import UVItem from '../uv-interface.item';
import UVAmount from '../uv-interface.amount';

function UvBarChart() {

  let parentProps = {
    index: useSelector((state: UVRootState) => {
      return state.barChart.parentIndex;
    }),
    valueType: useSelector((state: UVRootState) => {
      return state.barChart.valueType;
    }),
    isAmountOnly : useSelector((state: UVRootState) => {
      return state.barChart.isAmountOnly;
    }),
  };

  const barData = useSelector((state: UVRootState) => {
    return state.barChart.data;
  });

  const barConfig = useSelector((state: UVRootState) => {
    return state.barChart.config;
  });

  const chart = useRef({});

  useLayoutEffect(() => {

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
    valueAxis.min = barConfig.valueAxis.min;

    const series = uvChart.series.push(getChartDimensions(barConfig.dimension).columnType);
    series.dataFields.categoryY = barConfig.categoryKey;
    series.dataFields.valueX = 'value';
    series.tooltipText = '{valueX.value}';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.columns.template.tooltipText = "{valueX}";

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

    categoryAxis.sortBySeries = series;

    series.columns.template.maxHeight =  barConfig.series.column.template.maxHeight;

    if(uvDevice.isMobileDevice()) {
      categoryAxis.dataFields.category = barConfig.categoryShortKey;
      series.dataFields.categoryY = barConfig.categoryShortKey;
    }
    uvChart.data = getProcessedData(barData[parentProps.index].items) as UVItem[];

    chart.current = uvChart;

    return () => {
      uvChart.dispose();
    };
  }, [barData, barConfig, parentProps]);

  return (
    <div className="bar-chart-container">
      <div id="barChartDiv"></div>
    </div>
  );
}

export default UvBarChart;
