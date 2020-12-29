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
  data: {
    title: number;
    label: string;
    subtitle ?: string;
  }
}
