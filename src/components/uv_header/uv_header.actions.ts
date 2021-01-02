import UV_HEADER from './uv_header.constants';
import { UVHeaderConfig } from './../../shared/Types';

const loadHeader = (actionConfig: UVHeaderConfig) => {
  return {
    type: UV_HEADER.LOAD,
    data: actionConfig
  }
};

export {
  loadHeader
}
