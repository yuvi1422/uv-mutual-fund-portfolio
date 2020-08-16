import { uvPieSaga } from './uv_pie/uv_pie-saga';
import { uvBarChartSaga } from './uv_bar_chart/uv_bar_chart-saga';
import { SagaMiddleware } from 'redux-saga';

const sagas = [uvPieSaga, uvBarChartSaga];

export function runAllSaga(middleware: SagaMiddleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}
