import { UVAction } from '../../shared/Types';
import UV_ANGULAR_GAUGE from './uv_angular-gauge.constants';

const initialState = {
  score: 1,
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
    case UV_ANGULAR_GAUGE.UPDATE:
      return {
        ...state,
        score: action.config
      }
    default:
      return state;
  }
};

export default UvAngularGaugeReducer;
