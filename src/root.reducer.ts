import { combineReducers } from 'redux';
import uvPieReducer from './uv_pie/uv_pie.reducers';
import uvBarChartReducer from './uv_bar-chart/uv_bar-chart.reducers';
import uvHeaderReducer from './uv_header/uv_header.reducers';

export const rootReducer = combineReducers({
  header: uvHeaderReducer,
  pie: uvPieReducer,
  barChart: uvBarChartReducer
});

export type UVRootState = ReturnType<typeof rootReducer>
