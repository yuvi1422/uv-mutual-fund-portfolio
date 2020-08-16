import { takeEvery, put } from 'redux-saga/effects';
import UV_BAR_CHART from './uv_bar_chart-constants';
import UVAction from '../uv_interface-action';

function* loadChart(chartData: UVAction) {
  console.log('Bar Chart Data: ', chartData);
  yield put({
    type: 'BAR_CHART_DETAILS'
  });
}

export function* uvBarChartSaga() {
  yield takeEvery(UV_BAR_CHART.SELECT, loadChart);
}
