import { takeEvery, put } from 'redux-saga/effects';
import UV_PIE from './uv_pie-constants';
import { updateBarChart } from '../uv_bar_chart/uv_bar_chart-actions';
import UVPieSelect from './uv_pie-interface-select';

function* selectSlice(pieSlice: UVPieSelect) {
  // Note: We can dispatch event using store dispatch but it's not recommended in generator by Redux Saga docs.
  // put is most testable than store dispatch
  yield put(updateBarChart(pieSlice.sliceIndex, pieSlice.data));
}

export function* uvPieSaga() {
  yield takeEvery(UV_PIE.SELECT_SLICE, selectSlice);
}
