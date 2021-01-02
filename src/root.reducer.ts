import { combineReducers } from 'redux';

import UVHeaderReducer from './components/uv_header/uv_header.reducers';
import UVDashboardReducer from './modules/uv_dashboard/uv_dashboard.reducer';

export const rootReducer = combineReducers({
  header: UVHeaderReducer,
  dashboard: UVDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
