import UV_BAR_CHART from './uv_bar_chart-constants';

const initialState = {
  parentIndex: 0,
  valueType: 'current',
  isAmountOnly: true,
  config: {},
  data: {
    default: {
      categories: []
    }
  }
};

const uvBarChartReducer = (state=initialState, action:any) => {
  switch (action.type) {
    case UV_BAR_CHART.INIT:
      return {
        ...state,
        config: action.config,
        data: action.data
      }
    case UV_BAR_CHART.UPDATE:
      return {
        ...state,
        parentIndex: action.parentIndex
      }
    default:
      return state;
  }
}

export default uvBarChartReducer;
