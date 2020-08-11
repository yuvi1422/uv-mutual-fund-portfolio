import UV_PIE from './uv-pie-constants';

const initialState = {
  data: {
    default: {
      categories: []
    }
  }
};

const uvPieReducer = (state=initialState, action:any) => {
  switch (action.type) {
    case UV_PIE.LOAD:
      return {
        ...state,
        data: action && action.data && action.data.default
      }
    default:
      return state;
  }
}

export default uvPieReducer;
