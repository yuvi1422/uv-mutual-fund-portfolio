import UVAction from './../uv_interface.action';
import UV_ANGULAR_GAUGE from './uv_angular-gauge.constants';

const initialState = {
  config: {},
  data: []
};

const UvAngularGaugeReducer = (state=initialState, action: UVAction) => {

  switch(action.type) {
    case UV_ANGULAR_GAUGE.LOAD:
      return {
        ...state,
        config: action.config,
        data: action.data
      }
    default:
      return state;
  }
};

export default UvAngularGaugeReducer;
