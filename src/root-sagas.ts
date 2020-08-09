import { uvPieSaga } from './uv-pie/uv-pie-saga';
import { uvBarChartSaga } from './uv-bar-chart/uv-bar-chart-saga';

const sagas = [uvPieSaga, uvBarChartSaga];

export function runAllSaga(middleware:any) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}