import UV_PIE from './uv-pie-constants';

const initialState = {
  sliceIndex: 0
};

const uvPieReducer = (state=initialState, action:any) => {
  switch (action.type) {
    case UV_PIE.SELECT_SLICE:
      return {
        ...state,
        sliceIndex: state.sliceIndex
      }
    default:
      return state;
  }
}

export default uvPieReducer;
