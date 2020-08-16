import UV_BAR_CHART from './uv_bar_chart-constants';
import UVBarChartConfig from './uv_bar_chart-interface-config';
import UVItem from '../uv_interface-item';

const initBarChart = (barChartConfig: UVBarChartConfig, barChartItems: UVItem[]) => {
  return {
    type: UV_BAR_CHART.INIT,
    config: barChartConfig,
    data: barChartItems
  };
};

const updateBarChart = (parentIndex: number, items: UVItem[]) => {
  return {
    type: UV_BAR_CHART.UPDATE,
    config: {
      index: parentIndex
    },
    data: items
  };
};

const loadCategoryDetails = (categoryData: UVItem[]) => {
  return {
    type: UV_BAR_CHART.SELECT,
    config:[],
    data: categoryData
  };
};

export {
  initBarChart,
  updateBarChart,
  loadCategoryDetails
}
