import uvPieReducer from './uv-pie/uv-pie-reducers';
import uvBarChartReducer from './uv-bar-chart/uv-bar-chart-reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  pie: uvPieReducer,
  barChart: uvBarChartReducer
});