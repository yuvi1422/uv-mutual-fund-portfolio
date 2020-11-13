import UV_HEADER from './uv_header.constants';
import UVAction from '../uv_interface.action';

const initialState = {
  data: {}
};

const uvHeaderReducer = (state=initialState, action: UVAction) => {
  switch (action.type) {
    case UV_HEADER.LOAD:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default uvHeaderReducer;
