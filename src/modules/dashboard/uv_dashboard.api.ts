import axios from 'axios';

const getDashboardData = ()=> {
  const url = 'https://demo1926272.mockable.io/getInvestments';

  return axios.get(url);
}

const UvDashboardApi = {
  getDashboardData: getDashboardData
};

export default UvDashboardApi;
