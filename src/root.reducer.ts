import { combineReducers } from 'redux';

import uvHeaderReducer from './components/uv_header/uv_header.reducers';
import UvDashboardReducer from './modules/uv_dashboard/uv_dashboard.reducer';

export const rootReducer = combineReducers({
  header: uvHeaderReducer,
  dashboard: UvDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
