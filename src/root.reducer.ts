import { combineReducers } from 'redux';

import UvDashboardReducer from './modules/dashboard/uv_dashboard.reducer';
import uvHeaderReducer from './components/uv_header/uv_header.reducers';

export const rootReducer = combineReducers({
  header: uvHeaderReducer,
  dashboard: UvDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
