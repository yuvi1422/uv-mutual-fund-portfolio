import UV_BAR_CHART from './uv-bar-chart-constants';

const initBarChart = (barChartConfig: any, barChartCategories: any) => {
  return {
    type: UV_BAR_CHART.INIT,
    config: barChartConfig,
    data: barChartCategories
  };
};

const updateBarChart = (index: number) => {
  return {
    type: UV_BAR_CHART.UPDATE,
    parentIndex: index
  };
};

export {
  initBarChart,
  updateBarChart
}
