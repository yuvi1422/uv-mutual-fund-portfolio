import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import uvObject from '@uv-tech/util/lib/uv-object';

import * as appData from './uv_app-data.json';
import * as headerData from './components/uv_header/uv_header.json';
import * as barChartData from './components/uv_bar-chart/uv_bar-chart.json';
import * as angularGaugeData from './components/uv_angular-gauge/uv_angular-gauge.json';
import * as numberData from './components/uv_number/uv_number.json';

import { rootReducer } from './root.reducer';
import { runAllSaga } from './root.sagas';

import { loadDashboard } from './modules/dashboard/uv_dashboard.actions';
import { loadHeader } from './components/uv_header/uv_header.actions';
import { initBarChart } from './components/uv_bar-chart/uv_bar-chart.actions';
import { loadAngularGauge } from './components/uv_angular-gauge/uv_angular-gauge.actions';
import { loadNumber } from './components/uv_number/uv_number.actions';

const sagaMiddleware = createSagaMiddleware();

export const uvStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

runAllSaga(sagaMiddleware);

uvStore.dispatch(loadDashboard());
uvStore.dispatch(loadHeader(headerData.config));
const initialIndex = uvObject.getObjectByPath(appData, 'config', 'initialIndex', 0);
uvStore.dispatch(initBarChart(barChartData.config, appData.categories[initialIndex].items));
uvStore.dispatch(loadAngularGauge(angularGaugeData.config, angularGaugeData.data));
uvStore.dispatch(loadNumber(numberData.config, numberData.data));
