import { takeEvery } from 'redux-saga/effects';
import { UVAction } from '../../shared/Types';
import UV_HEADER from './uv_header.constants';

function* updateHeader(pieSlice: UVAction) {
  console.log('Header updated');
  yield 'Header Updated';
}

export function* UVHeaderSaga() {
  yield takeEvery(UV_HEADER.UPDATE, updateHeader);
}
