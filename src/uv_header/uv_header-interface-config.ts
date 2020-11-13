export default interface UVHeaderConfig {
  title: string;
  theme ?: string;
  alt ?: string;
  logo ?: {
    logo : string;
    alt ?: string;
    width ?: string;
  }
  repository ?: {
    name ?: string;
    logo: string;
    url: string;
  }
};
