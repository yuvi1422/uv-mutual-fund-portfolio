export type UVBarChartConfig = {
  dimension ?: string;
  categoryKey: string;
  categoryShortKey: string;
  valueAxis ?: object;
  series ?: object;
}

export type UvDashboardType = {
  config ?: any;
  uvNumbers: UvNumberProps[]
}

export type UvNumberProps = {
  config ?: {
    class ?: string;
    title ?: {
      class ?: string;
    };
    subtitle ?: {
      class ?: string;
    }
  };
  title: number;
  label: string;
  subtitle?: string;
}

export type UVCategoryConfig = {
  id: number;
  name: string;
  value: string;
  color: string;
  expenseRatio: number;
}

export type UVCategory = {
  // Key will be string and value will be anything of mentioned types.
  [key: string]:  number | undefined | UVItem[] | UVCategoryConfig;

  config: UVCategoryConfig;
  selectionIndex: number
  items: UVItem[];
};

export type UVAmount = {
  amount: number;
  price: number;
  quantity: number;
};

export type UVItem = {
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

export type UVAction = {
  type: string;
  config ?: any;
  data ?: any;
};
