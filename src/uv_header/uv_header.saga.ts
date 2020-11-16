import { takeEvery } from 'redux-saga/effects';
import UVAction from '../uv_interface.action';
import UV_HEADER from './uv_header.constants';

function* updateHeader(pieSlice: UVAction) {
  console.log('Header updated');
  yield 'Header Updated';
}

export function* uvHeaderSaga() {
  yield takeEvery(UV_HEADER.UPDATE, updateHeader);
}
