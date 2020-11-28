import UVAction from '../uv_interface.action';
import UV_NUMBER from './uv_number.constants';

const initialState = {
  config: {
    class: '',
    title: {
      class: ''
    },
    subtitle: {
      class: ''
    }
  },
  data: {
    title: 0,
    subtitle: ''
  }
}

const UvNumberReducer = (state=initialState, action: UVAction) => {
  switch(action.type) {
    case UV_NUMBER.LOAD:
      return {
        ...state,
        config: {...initialState.config, ...action.config},
        data: {
          title: action.data.title,
          subtitle: action.data.subtitle
        }
      }
    default:
      return state;
  }
}

export default UvNumberReducer;
