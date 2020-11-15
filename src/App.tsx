import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import * as appData from './uv_app-data.json';

import UvHeader from './uv_header/uv_header';
import UvPie from './uv_pie/uv_pie';
import UvBarChart from './uv_bar-chart/uv_bar-chart';
import UvAngularGauge from './uv_angular-gauge/uv_angular-gauge';

function App() {
  return (
    <div className={'App uv-font-' + (appData.config.font ? appData.config.font: 'medium')}>
      <Container>
        <Row className="uv-row">
          <UvHeader></UvHeader>
        </Row>
        <Row className="uv-container uv-row">
          <Col md={6} xs={12}>
            <UvPie></UvPie>
          </Col>
          <Col md={6} xs={12}>
              <UvBarChart></UvBarChart>
          </Col>
        </Row>
        <Row className="uv-row">
          <Col md={4} xs={12}>
            <UvAngularGauge></UvAngularGauge>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
