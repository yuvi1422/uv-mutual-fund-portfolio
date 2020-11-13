import { SagaMiddleware } from 'redux-saga';

import { uvPieSaga } from './uv_pie/uv_pie-saga';
import { uvBarChartSaga } from './uv_bar_chart/uv_bar_chart-saga';
import { uvHeaderSaga } from './uv_header/uv_header-saga';

const sagas = [uvHeaderSaga, uvPieSaga, uvBarChartSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
