import UV_PIE from './uv-pie-constants';

const loadPie = (pieConfig: any, pieCategories: any) => {
  return {
    type: UV_PIE.LOAD,
    config: pieConfig,
    data: pieCategories
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
