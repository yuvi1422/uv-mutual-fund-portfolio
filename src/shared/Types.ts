import UvNumber from "../components/uv_number/uv_number";

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