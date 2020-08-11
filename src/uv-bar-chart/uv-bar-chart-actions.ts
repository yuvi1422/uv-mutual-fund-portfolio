import UV_BAR_CHART from './uv-bar-chart-constants';

const loadBarChart = (index: number) => {
  return {
    type: UV_BAR_CHART.LOAD,
    parentIndex: index
  };
};

export {
  loadBarChart
}
