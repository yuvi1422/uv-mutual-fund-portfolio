import { SagaMiddleware } from 'redux-saga';

import { UVDashboardSaga } from './modules/uv_dashboard/uv_dashboard.saga';
import { UVHeaderSaga } from './components/uv_header/uv_header.saga';


const sagas = [UVDashboardSaga, UVHeaderSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
