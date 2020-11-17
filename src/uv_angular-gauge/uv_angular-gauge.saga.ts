import { takeEvery } from 'redux-saga/effects';
import UVAction from './../uv_interface.action';
import UV_ANGULAR_GAUGE from './uv_angular-gauge.constants';

function* updateAngularGauge(angularGaugeData: UVAction) {
  console.log('Angular Gauge Updated: ', angularGaugeData);
  yield 'Angular Gauge Updated';
}


export function* uvAngularGaugeSaga() {
  yield takeEvery(UV_ANGULAR_GAUGE.UPDATE, updateAngularGauge);
}