import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import uvObject from '@uv-tech/util/lib/uv-object';

import * as appData from './uv_app-data.json';
import * as headerData from './uv_header/uv_header.json';
import * as pieData from './uv_pie/uv_pie.json';
import * as barChartData from './uv_bar-chart/uv_bar-chart.json';
import * as angularGaugeData from './uv_angular-gauge/uv_angular-gauge.json';
import * as numberData from './uv_number/uv_number.json';

import { rootReducer } from './root.reducer';
import { runAllSaga } from './root.sagas';

import { loadHeader } from './uv_header/uv_header.actions';
import { loadPie } from './uv_pie/uv_pie.actions';
import { initBarChart } from './uv_bar-chart/uv_bar-chart.actions';
import { loadAngularGauge } from './uv_angular-gauge/uv_angular-gauge.actions';
import { loadNumber } from './uv_number/uv_number.actions';

const sagaMiddleware = createSagaMiddleware();

export const uvStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

runAllSaga(sagaMiddleware);

uvStore.dispatch(loadHeader(headerData.config));
uvStore.dispatch(loadPie(pieData.config, appData.categories));
const initialIndex = uvObject.getObjectByPath(appData, 'config', 'initialIndex', 0);
uvStore.dispatch(initBarChart(barChartData.config, appData.categories[initialIndex].items));
uvStore.dispatch(loadAngularGauge(angularGaugeData.config, angularGaugeData.data));
uvStore.dispatch(loadNumber(numberData.config, numberData.data));
