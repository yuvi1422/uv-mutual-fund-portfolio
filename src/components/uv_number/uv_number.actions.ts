import UV_NUMBER from './uv_number.constants';
import UvNumberConfig from './uv_number.config.interface';
import UvNumberData from './uv_number.data.interface';

const loadNumber = (numberConfig: UvNumberConfig, numberData: UvNumberData) => {
  return {
    type: UV_NUMBER.LOAD,
    config: numberConfig,
    data: numberData
  };
}

export {
  loadNumber
}
