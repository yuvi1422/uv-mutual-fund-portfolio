import UV_PIE from './uv-pie-constants';

const loadPie = (data: any) => {
  return {
    type: UV_PIE.LOAD,
    data: data
  }
};

const selectSlice = (index:any) => {
  return {
    type: UV_PIE.SELECT_SLICE,
    sliceIndex: index
  }
};


export {
  loadPie,
  selectSlice
}
