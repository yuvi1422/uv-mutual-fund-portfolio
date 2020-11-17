import UV_ANGULAR_GAUGE from './uv_angular-gauge.constants';
import UvAngularGaugeConfig from './uv_angular-gauge.config.interface';
import UvAngularGaugeData from './uv_angular-gauge.data.interface';

const loadAngularGauge = (angularGaugeConfig: UvAngularGaugeConfig, angularGaugeData: UvAngularGaugeData[]) => {
  return {
    type: UV_ANGULAR_GAUGE.LOAD,
    config: angularGaugeConfig,
    data: angularGaugeData
  }
};

const updateAngularGauge = (angularGauageScore: number) => {
  return {
    type: UV_ANGULAR_GAUGE.UPDATE,
    score: angularGauageScore
  }
};

export {
  loadAngularGauge,
  updateAngularGauge
}
