import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import UvPie from './uv_pie/uv_pie';
import UvBarChart from './uv_bar_chart/uv_bar_chart';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <UvPie></UvPie>
          </Col>
          <Col md={6} xs={12}>
              <UvBarChart></UvBarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
