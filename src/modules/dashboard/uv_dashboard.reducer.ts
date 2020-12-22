import UVAction from "../../uv_interface.action";
import UV_DASHBOARD from "./uv_dashboard.constants";

const initialState = {
  pie: {},
  barChart: {},
  numbers: []
};

const UvDashboardReducer = (state = initialState, action: UVAction)=> {
  switch(action.type) {
    case UV_DASHBOARD.UPDATE:
      return {
        ...state,
        numbers: action.data.uvNumbers,
        pie: action.data.pie
      }
    default:
      return state;
  }
};

export default UvDashboardReducer;
