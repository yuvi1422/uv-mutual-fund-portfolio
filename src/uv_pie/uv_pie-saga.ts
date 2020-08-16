import { takeEvery, put } from 'redux-saga/effects';
import UV_PIE from './uv_pie-constants';
import { updateBarChart } from '../uv_bar_chart/uv_bar_chart-actions';
import UVAction from '../uv_interface-action';

function* selectSlice(pieSlice: UVAction) {
  // Note: We can dispatch event using store dispatch but it's not recommended in generator by Redux Saga docs.
  // put is most testable than store dispatch
  yield put(updateBarChart(pieSlice.config.index, pieSlice.data));
}

export function* uvPieSaga() {
  yield takeEvery(UV_PIE.SELECT_SLICE, selectSlice);
}
