import UV_BAR_CHART from './uv_bar_chart-constants';
import UVCategory from '../uv_interface-category';
import UVBarChartConfig from './uv_bar_chart-interface-config';
import UVItem from '../uv_interface-item';

const initBarChart = (barChartConfig: UVBarChartConfig, barChartItems: UVItem[]) => {
  return {
    type: UV_BAR_CHART.INIT,
    config: barChartConfig,
    data: barChartItems
  };
};

const updateBarChart = (parentIndex: number, categoryData: any) => {
  return {
    type: UV_BAR_CHART.UPDATE,
    index: parentIndex,
    data: categoryData
  };
};

export {
  initBarChart,
  updateBarChart
}
