import { SagaMiddleware } from 'redux-saga';

import { uvHeaderSaga } from './uv_header/uv_header.saga';
import { uvPieSaga } from './uv_pie/uv_pie.saga';
import { uvBarChartSaga } from './uv_bar-chart/uv_bar-chart.saga';
import { uvAngularGaugeSaga } from './uv_angular-gauge/uv_angular-gauge.saga';

const sagas = [uvHeaderSaga, uvPieSaga, uvBarChartSaga, uvAngularGaugeSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
