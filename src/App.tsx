import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import UvPie from './uv-pie/uv-pie';
import UvBarChart from './uv-bar-chart/uv-bar-chart';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={7} xs={12}>
            <UvPie></UvPie>
          </Col>
          <Col md={5} xs={12}>
              <UvBarChart></UvBarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
