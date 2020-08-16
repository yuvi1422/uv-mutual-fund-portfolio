import uvPieReducer from './uv_pie/uv_pie-reducers';
import uvBarChartReducer from './uv_bar_chart/uv_bar_chart-reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  pie: uvPieReducer,
  barChart: uvBarChartReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
