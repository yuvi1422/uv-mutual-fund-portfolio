import UV_PIE from './uv-pie-constants';

const initialState = {
  config: {},
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
        config: action.config,
        data: action.data
      }
    default:
      return state;
  }
}

export default uvPieReducer;
