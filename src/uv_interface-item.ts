import UVAmount from './uv_interface-amount';

export default interface UVItem  {
  // Key will be string and value will be anything of mentioned types.
  [key: string]:  UVAmount | string | number| object;

  name: string;
  shortName: string;
  initial: UVAmount;
  current: UVAmount;
  goal: string;
  minimumInvestment: object;
  expenseRatio:  number;
  exitLoad: number;
  fundManager: string;
  inceptionSince: string;
  returns: object;
  rating: number;
  firstInvestmentDate: string;
  tentetiveEndDate: string;
  AUM: number;
  fundHouse: object;
};
