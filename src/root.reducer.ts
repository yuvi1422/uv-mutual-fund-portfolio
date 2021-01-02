import { combineReducers } from 'redux';

import UVDashboardReducer from './modules/uv_dashboard/uv_dashboard.reducer';

export const rootReducer = combineReducers({
  dashboard: UVDashboardReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
