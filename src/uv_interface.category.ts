import UVItem from './uv_interface.item';

export default interface UVCategory {
  // Key will be string and value will be anything of mentioned types.
  [key: string]: string | number | boolean | undefined | UVItem[];

  id: number;
  name: string;
  value: number;
  isAmountOnly?: boolean;
  items: UVItem[];
};
