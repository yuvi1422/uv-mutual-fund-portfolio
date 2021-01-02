import { SagaMiddleware } from 'redux-saga';

import { UvDashboardSaga } from './modules/uv_dashboard/uv_dashboard.saga';
import { uvHeaderSaga } from './components/uv_header/uv_header.saga';


const sagas = [UvDashboardSaga, uvHeaderSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
