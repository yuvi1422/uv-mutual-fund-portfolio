import { takeEvery, put } from 'redux-saga/effects';
import UV_BAR_CHART from './uv_bar-chart.constants';
import UVAction from '../uv_interface.action';
import UV_ANGULAR_GAUGE from './../uv_angular-gauge/uv_angular-gauge.constants';
import UV_NUMBER from '../uv_number/uv_number.constants';

function* selectBar(chartData: UVAction) {
  console.log('Bar Chart Data: ', chartData);
  // Note: We can dispatch event from here using store dispatch. But it's not recommended to do in generator by Redux Saga docs.
  // put method is more testable than store dispatch
  // Trigger Angular Gauage Update for Crisil Rating
  yield put({
    type: UV_ANGULAR_GAUGE.UPDATE,
    config: chartData.data.rating // TODO: Move this to data object instead of config object.
  });

  // Trigger Number Component Update for expense ratio
  yield put({
    type: UV_NUMBER.LOAD,
    data: {
      title: chartData.data.expenseRatio,
      subtitle: 'Category Average: ' + chartData.config.expenseRatio
    }
  });
}

export function* uvBarChartSaga() {
  yield takeEvery(UV_BAR_CHART.SELECT, selectBar);
}
