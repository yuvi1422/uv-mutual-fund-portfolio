import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import * as appData from './uv_app-data.json';

import UvDashboard from './modules/dashboard/uv_dashboard';

function App() {
  return (
    <div className={'App uv-font-' + (appData.config.font ? appData.config.font: 'medium')}>
      <UvDashboard ></UvDashboard>
    </div>
  );
}

export default App;
