import UV_BAR_CHART from './uv-bar-chart-constants';

const initBarChart = (barChartData: any, barChartCategories: any) => {
  return {
    type: UV_BAR_CHART.INIT,
    config: barChartData,
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
