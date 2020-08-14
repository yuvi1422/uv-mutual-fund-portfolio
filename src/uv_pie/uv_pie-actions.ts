import UV_PIE from './uv_pie-constants';
import UVPieConfig from './uv_pie-interface-config';
import UVCategory from '../uv_interface-category';

const loadPie = (pieConfig: UVPieConfig, pieCategories: UVCategory[]) => {
  return {
    type: UV_PIE.LOAD,
    config: pieConfig,
    data: pieCategories
  }
};

const selectSlice = (index: number) => {
  return {
    type: UV_PIE.SELECT_SLICE,
    sliceIndex: index
  }
};

export {
  loadPie,
  selectSlice
}
