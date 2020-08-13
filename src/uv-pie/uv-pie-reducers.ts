import UV_PIE from './uv-pie-constants';
import UVAction from '../uv-interface.action';

const initialState = {
  config: {},
  data: {
    categories: []
  }
};

const uvPieReducer = (state=initialState, action: UVAction) => {
  switch (action.type) {
    case UV_PIE.LOAD:
      return {
        ...state,
        config: action.config,
        data: action.data
      }
    default:
      return state;
  }
}

export default uvPieReducer;
