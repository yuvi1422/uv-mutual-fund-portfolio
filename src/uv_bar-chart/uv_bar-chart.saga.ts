import { takeEvery, put } from 'redux-saga/effects';
import UV_BAR_CHART from './uv_bar-chart.constants';
import UVAction from '../uv_interface.action';
import UV_ANGULAR_GAUGE from './../uv_angular-gauge/uv_angular-gauge.constants';

function* selectBar(chartData: UVAction) {
  console.log('Bar Chart Data: ', chartData);
  // Note: We can dispatch event from here using store dispatch. But it's not recommended to do in generator by Redux Saga docs.
  // put method is more testable than store dispatch
  yield put({
    type: UV_ANGULAR_GAUGE.UPDATE,
    config: chartData.data.rating
  });
}

export function* uvBarChartSaga() {
  yield takeEvery(UV_BAR_CHART.SELECT, selectBar);
}
