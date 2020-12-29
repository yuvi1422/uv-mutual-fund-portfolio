import { combineReducers } from 'redux';

import UvDashboardReducer from './modules/dashboard/uv_dashboard.reducer';
import uvHeaderReducer from './components/uv_header/uv_header.reducers';
import UvAngularGaugeReducer from './components/uv_angular-gauge/uv_angular-gauge.reducer';

export const rootReducer = combineReducers({
  header: uvHeaderReducer,
  angularGauge: UvAngularGaugeReducer,
  dashboard: UvDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
