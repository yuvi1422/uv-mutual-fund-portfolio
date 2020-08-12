import React, { useLayoutEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import './uv-bar-chart.css';
import { useSelector } from 'react-redux';
import uvDevice from '@uv-tech/util/lib/uv-device';

function UvBarChart() {

  let parentProps = {
    index: useSelector((state:any) => {
      return state.barChart.parentIndex;
    }),
    valueType: useSelector((state:any) => {
      return state.barChart.valueType;
    }),
    isAmountOnly : useSelector((state:any) => {
      return state.barChart.isAmountOnly;
    }),
  };

  const barData = useSelector((state:any) => {
    return state.barChart.data;
  });

  const barConfig = useSelector((state:any) => {
    return state.barChart.config;
  });

  const chart = useRef(null);

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
    function getProcessedData(entries: any) {
      for (const entry of entries) {
        if(!entry[parentProps.valueType]) {
          console.error('Data format is incorrect for bar chart');
          return;
        }
        if(parentProps.isAmountOnly) {
          entry.value = entry[parentProps.valueType].amount;
        } else {
          entry.value = entry[parentProps.valueType].price * entry[parentProps.valueType].quantity;
        }
      }
      return entries;
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
    series.columns.template.adapter.add('fill', (fill, target: any) => {
      return uvChart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;

    series.columns.template.maxHeight =  barConfig.series.column.template.maxHeight;

    if(uvDevice.isMobileDevice()) {
      categoryAxis.dataFields.category = barConfig.categoryShortKey;
      series.dataFields.categoryY = barConfig.categoryShortKey;
    }
    uvChart.data = getProcessedData(barData[parentProps.index].items);

    chart.current = uvChart as any;

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
