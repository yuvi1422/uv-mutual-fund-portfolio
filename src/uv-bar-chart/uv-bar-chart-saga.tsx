import { takeEvery } from 'redux-saga/effects';
import UV_BAR_CHART from './uv-bar-chart-constants';

function* loadChart(data:any) {
  console.log('Bar Chart Data: ', data);
}

export function* uvBarChartSaga() {
  yield takeEvery(UV_BAR_CHART.LOAD, loadChart);
}
