import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import * as appData from './shared/uv_app-data.json';
import UvHeader from './components/uv_header/uv_header';
import UvDashboard from './modules/uv_dashboard/uv_dashboard';


function App() {
  return (
    <div className={'App uv-font-' + (appData.config.font ? appData.config.font: 'medium')}>
      <Container>
        <Row className="uv-row">
         <UvHeader></UvHeader>
        </Row>
      <UvDashboard ></UvDashboard>
      </Container>
    </div>
  );
}

export default App;
