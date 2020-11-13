import UV_BAR_CHART from './uv_bar-chart.constants';
import UVAction from '../uv_interface.action';

const initialState = {
  valueType: 'current',
  isAmountOnly: true,
  config: {
    index: 0
  },
  data: {
    default: {
      categories: []
    }
  }
};

const uvBarChartReducer = (state=initialState, action: UVAction) => {
  switch (action.type) {
    case UV_BAR_CHART.INIT:
      return {
        ...state,
        config: action.config,
        data: action.data
      }
    case UV_BAR_CHART.UPDATE:
      let tmpConfig = {...state.config};
      tmpConfig.index = action.config.index;
      return {
        ...state,
        config: tmpConfig,
        data: action.data
      };

    default:
      return state;
  }
}

export default uvBarChartReducer;
