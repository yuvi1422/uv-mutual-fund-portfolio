import UV_BAR_CHART from './uv_bar-chart.constants';

const barChartColumnSelected = (componentId: number, columnIndex: number) => {
  return {
    type: UV_BAR_CHART.SELECT,
    config: {
      componentId: componentId
    },
    data: {
      columnIndex: columnIndex
    }
  };
};

export {
  barChartColumnSelected
}
