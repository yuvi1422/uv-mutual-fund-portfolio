import UV_HEADER from './uv_header.constants';
import { UVAction } from '../../shared/Types';

const initialState = {
  data: {}
};

const UVHeaderReducer = (state=initialState, action: UVAction) => {
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

export default UVHeaderReducer;
