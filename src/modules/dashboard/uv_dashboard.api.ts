import axios from 'axios';
import * as appData from './../../shared/uv_app-data.json';

const getDashboardData = ()=> {
  return axios.get(appData.config.apis.dashboard.url);
}

const UvDashboardApi = {
  getDashboardData: getDashboardData
};

export default UvDashboardApi;
