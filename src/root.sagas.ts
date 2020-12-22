import { SagaMiddleware } from 'redux-saga';

import { UvDashboardSaga } from './modules/dashboard/uv_dashboard.saga';
import { uvHeaderSaga } from './components/uv_header/uv_header.saga';
import { uvBarChartSaga } from './components/uv_bar-chart/uv_bar-chart.saga';
import { uvAngularGaugeSaga } from './components/uv_angular-gauge/uv_angular-gauge.saga';
import { UvNumberSaga } from './components/uv_number/uv_number.saga';


const sagas = [UvDashboardSaga, uvHeaderSaga, uvBarChartSaga, uvAngularGaugeSaga, UvNumberSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
