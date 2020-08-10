import UV_BAR_CHART from './uv-bar-chart-constants';

const initialState = {
  parentIndex: 0
};

const uvBarChartReducer = (state=initialState, action:any) => {
  switch (action.type) {
    case UV_BAR_CHART.LOAD:
      return {
        ...state,
        parentIndex: action.parentIndex
      }
    default:
      return state;
  }
}

export default uvBarChartReducer;
