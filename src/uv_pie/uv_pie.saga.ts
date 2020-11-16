import { takeEvery } from 'redux-saga/effects';
import UV_PIE from './uv_pie.constants';
import UVAction from '../uv_interface.action';

function* updatePie(pieSlice: UVAction) {
  console.log('UVPie updated');
  yield 'UVPie Updated';
}

export function* uvPieSaga() {
  yield takeEvery(UV_PIE.UPDATE, updatePie);
}
