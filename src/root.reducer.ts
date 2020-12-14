import { combineReducers } from 'redux';

import UvDashboardReducer from './modules/dashboard/uv_dashboard.reducer';
import uvHeaderReducer from './components/uv_header/uv_header.reducers';
import uvPieReducer from './components/uv_pie/uv_pie.reducers';
import uvBarChartReducer from './components/uv_bar-chart/uv_bar-chart.reducers';
import UvAngularGaugeReducer from './components/uv_angular-gauge/uv_angular-gauge.reducer';
import UvNumberReducer from './components/uv_number/uv_number.reducer';


export const rootReducer = combineReducers({
  header: uvHeaderReducer,
  pie: uvPieReducer,
  barChart: uvBarChartReducer,
  angularGauge: UvAngularGaugeReducer,
  number: UvNumberReducer,
  dashboard: UvDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
