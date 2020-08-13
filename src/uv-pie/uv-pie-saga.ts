import { takeEvery, put } from 'redux-saga/effects';
import UV_PIE from './uv-pie-constants';
import { updateBarChart } from './../uv-bar-chart/uv-bar-chart-actions';
import UVPieSelect from './uv-interface.pie.select';

function* selectSlice(data: UVPieSelect) {
  // Note: We can dispatch event using store dispatch but it's not recommended in generator by Redux Saga docs.
  // put is most testable than store dispatch
  yield put(updateBarChart(data.sliceIndex));
}

export function* uvPieSaga() {
  yield takeEvery(UV_PIE.SELECT_SLICE, selectSlice);
}
