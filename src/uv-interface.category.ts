import UVItem from './uv-interface.item';

export default interface UVCategory {
  id: number;
  name: string;
  value: number;
  isAmountOnly?: boolean;
  items: UVItem[];
};
