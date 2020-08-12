import React, { useLayoutEffect, useRef } from 'react';

import uvDevice from '@uv-tech/util/lib/uv-device';
import uvObject from  '@uv-tech/util/lib/uv-object';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

import { uvStore } from './../uv-store';
import { selectSlice } from './uv-pie-actions';

import './uv-pie.css';
import { useSelector } from 'react-redux';
import { UVRootState } from '../root-reducer';

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

function UvPie() {
  const chart = useRef(null);

  let pieData = useSelector((state: UVRootState) => {
    return state.pie.data;
  })

  useLayoutEffect(() => {

    let valueType = 'initial';
    function getSectorTotal(category:any) {
      let total = 0;
      for (const item of category.items) {
        if(category.isAmountOnly && item[valueType] && item[valueType].amount) {
          total += item[valueType].amount;
        } else if(item[valueType] && item[valueType].price && item[valueType].quantity){
          total += item[valueType].price * item[valueType].quantity;
        }
      }
      return total;
    }

    function getProcessedData(sectors:any) {
      const processedSectors = [];
      for (const sector of sectors) {
        sector.value = getSectorTotal(sector);
        if (sector.value > 0) {
          processedSectors.push(sector);
        }
      }
      return processedSectors;
    }

    const uvChart = am4core.create('pieDiv', am4charts.PieChart3D);

    uvChart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    uvChart.data = getProcessedData(pieData.categories);

      const series = uvChart.series.push(new am4charts.PieSeries3D());

      series.dataFields.value = 'value';
      series.dataFields.category = pieData.config.series.categoryKey;
      series.slices.template.propertyFields.fill = pieData.config.series.fillColorKey;
      series.slices.template.propertyFields.isActive = 'isActive';
      series.slices.template.propertyFields.id = 'id';
      uvChart.innerRadius = am4core.percent(uvObject.getObjectByPath(pieData, 'config.chsart', 'innerRadiusPercent', 0));

      series.slices.template.events.on('hit', ((ev) => {

        uvStore.dispatch(selectSlice(ev.target.id));

        series.slices.each(((item) => {
          if (item.isActive && item !== ev.target) {
            item.isActive = false;
          }
        }));
      }));

      if (uvDevice.isMobileDevice()) {
        uvChart.legend = new am4charts.Legend();
        series.labels.template.disabled = true;
      }

      series.labels.template.wrap = pieData.config.label.wrap;
      series.labels.template.width = pieData.config.label.width;
      // default startAngle is -90 and default endAngle is 270
      series.hiddenState.properties.endAngle = uvObject.getObjectByPath(pieData, 'config.series.animation', 'endAngle', 270);

      chart.current = uvChart as any;

    return () => {
      uvChart.dispose();
    };
  }, [pieData]);

  return (
    <div className="pie-container">
      <div id="pieDiv"></div>
    </div>
  );
}

export default UvPie;
