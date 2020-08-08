import { takeEvery, put } from 'redux-saga/effects';
import UV_PIE from './uv-pie-constants';
import UV_BAR_CHART from './../uv-bar-chart/uv-bar-chart-constants';

function* selectSlice(data: any) {
  yield put({
    type: UV_BAR_CHART.LOAD,
    parentIndex: data.sliceIndex
  });
}

export function* uvPieSaga() {
  yield takeEvery(UV_PIE.SELECT_SLICE, selectSlice);
}
