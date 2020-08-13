import { takeEvery, put } from 'redux-saga/effects';
import UV_BAR_CHART from './uv-bar-chart-constants';

function* loadChart(data:any) {
  console.log('Bar Chart Data: ', data);
  yield put({
    type: 'BAR_CHART_DETAILS'
  });
}

export function* uvBarChartSaga() {
  yield takeEvery(UV_BAR_CHART.SELECT, loadChart);
}
