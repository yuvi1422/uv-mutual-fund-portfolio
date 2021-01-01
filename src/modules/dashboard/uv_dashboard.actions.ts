import UV_DASHBOARD from "./uv_dashboard.constants";
import { UvDashboardType } from './../../shared/Types';

const initDashboard = () => {
  return {
    type: UV_DASHBOARD.INIT
  }
}

const updateDashboard = (uvDashboardData: UvDashboardType) => {
  return {
    type: UV_DASHBOARD.UPDATE,
    data: uvDashboardData
  }
}

export {
  initDashboard,
  updateDashboard
}
