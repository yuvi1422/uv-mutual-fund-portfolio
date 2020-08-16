import UV_PIE from './uv_pie-constants';
import UVPieConfig from './uv_pie-interface-config';
import UVCategory from '../uv_interface-category';
import UVItem from '../uv_interface-item';

const loadPie = (pieConfig: UVPieConfig, pieCategories: UVCategory[]) => {
  return {
    type: UV_PIE.LOAD,
    config: pieConfig,
    data: pieCategories
  }
};

const selectSlice = (sliceIndex: number, sliceData: UVItem[]) => {
  return {
    type: UV_PIE.SELECT_SLICE,
    config: {
      index: sliceIndex
    },
    data: sliceData
  }
};

export {
  loadPie,
  selectSlice
}
