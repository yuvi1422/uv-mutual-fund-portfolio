import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import UvHeader from './../../components/uv_header/uv_header';
import UvPie from './../../components/uv_pie/uv_pie';
import UvBarChart from './../../components/uv_bar-chart/uv_bar-chart';
import UvAngularGauge from './../../components/uv_angular-gauge/uv_angular-gauge';
import UvNumber from './../../components/uv_number/uv_number';
import { useSelector } from 'react-redux';
import { UVRootState } from '../../root.reducer';

function UvDashboard() {

  let uvNumberData = useSelector((state: UVRootState) => {
    return state.dashboard.numbers;
  });

  let uvPieData = useSelector((state: UVRootState) => {
    return state.dashboard.pieCharts;
  });

  let uvBarChartData = useSelector((state: UVRootState) => {
    return state.dashboard.barCharts;
  });

  let uvAngularGauageData = useSelector((state: UVRootState) => {
    return state.dashboard.angularGauages;
  });

  return (
    <div className="uv-dashboard" id="uv-dashboard">
      <Container>
        <Row className="uv-row">
         <UvHeader></UvHeader>
        </Row>
        <Row className="uv-container uv-row">
          <Col md={6} xs={12}>
            <UvPie pieData={uvPieData[0]} componentId={0}></UvPie>
          </Col>
          <Col md={6} xs={12}>
              <UvBarChart barChart={uvBarChartData[0]} componentId={0}></UvBarChart>
          </Col>
        </Row>
        <Row className="uv-row">
          <Col md={4} xs={12}>
            <UvAngularGauge angularGauge={uvAngularGauageData[0]} componentId={0}></UvAngularGauge>
          </Col>
          {
            uvNumberData && uvNumberData.map((obj: any, index: any) => (
              <Col md={4} xs={12} key={index}>
                <Row>
                  <Col md={{ span: 12, offset: 1 }} xs={12}>
                    <UvNumber config={obj.config} data={obj.data} />
                  </Col>
                </Row>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default UvDashboard;
