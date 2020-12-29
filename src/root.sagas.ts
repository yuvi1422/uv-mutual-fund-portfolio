import { SagaMiddleware } from 'redux-saga';

import { UvDashboardSaga } from './modules/dashboard/uv_dashboard.saga';
import { uvHeaderSaga } from './components/uv_header/uv_header.saga';
import { uvAngularGaugeSaga } from './components/uv_angular-gauge/uv_angular-gauge.saga';


const sagas = [UvDashboardSaga, uvHeaderSaga, uvAngularGaugeSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
