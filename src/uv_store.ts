import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as headerData from './components/uv_header/uv_header.json';

import { rootReducer } from './root.reducer';
import { runAllSaga } from './root.sagas';

import { initDashboard } from './modules/uv_dashboard/uv_dashboard.actions';
import { loadHeader } from './components/uv_header/uv_header.actions';

const sagaMiddleware = createSagaMiddleware();

export const uvStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

runAllSaga(sagaMiddleware);

uvStore.dispatch(loadHeader(headerData.config));
uvStore.dispatch(initDashboard());
