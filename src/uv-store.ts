import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appData from './uv-app-data.json';
import * as barChartData from './uv-bar-chart/uv-bar-chart.json';

import { rootReducer } from './root-reducer';
import { runAllSaga } from './root-sagas';
import { loadPie } from './uv-pie/uv-pie-actions';
import { initBarChart } from './uv-bar-chart/uv-bar-chart-actions';

const sagaMiddleware = createSagaMiddleware();

export const uvStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

runAllSaga(sagaMiddleware);

uvStore.dispatch(loadPie(appData));
uvStore.dispatch(initBarChart(barChartData, appData.categories));