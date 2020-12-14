import UV_HEADER from './uv_header.constants';
import UVHeaderConfig from './uv_header.interface.config';

const loadHeader = (actionConfig: UVHeaderConfig) => {
  return {
    type: UV_HEADER.LOAD,
    data: actionConfig
  }
};

export {
  loadHeader
}
