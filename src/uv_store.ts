import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as appData from './uv_app-data.json';
import * as headerData from './uv_header/uv_header.json';
import * as pieData from './uv_pie/uv_pie.json';
import * as barChartData from './uv_bar-chart/uv_bar-chart.json';

import { rootReducer } from './root.reducer';
import { runAllSaga } from './root.sagas';

import { loadHeader } from './uv_header/uv_header.actions';
import { loadPie } from './uv_pie/uv_pie.actions';
import { initBarChart } from './uv_bar-chart/uv_bar-chart.actions';
import uvObject from '@uv-tech/util/lib/uv-object';

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
