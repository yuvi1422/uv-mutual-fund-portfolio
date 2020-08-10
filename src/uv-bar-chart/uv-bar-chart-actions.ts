import UV_BAR_CHART from './uv-bar-chart-constants';

const loadChart = (index: number) => {
  return {
    type: UV_BAR_CHART.LOAD,
    parentIndex: index
  };
};

export {
  loadChart
}
