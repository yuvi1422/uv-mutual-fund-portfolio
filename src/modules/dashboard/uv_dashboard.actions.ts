import UV_DASHBOARD from "./uv_dashboard.constants";
import { UvDashboardType } from './../../shared/Types';

const loadDashboard = () => {
  return {
    type: UV_DASHBOARD.LOAD
  }
}

const updateDashboard = (uvDashboardData: UvDashboardType) => {
  return {
    type: UV_DASHBOARD.UPDATE,
    data: uvDashboardData
  }
}

export {
  loadDashboard,
  updateDashboard
}
