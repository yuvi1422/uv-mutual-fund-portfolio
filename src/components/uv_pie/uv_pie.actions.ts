import UV_PIE from './uv_pie.constants';

const selectedPieSlice = (componentId: number, sliceIndex: number) => {
  return {
    type: UV_PIE.SELECT,
    config: {
      componentId: componentId
    },
    data: {
      sliceIndex: sliceIndex
    }
  };
};


export {
  selectedPieSlice
}
