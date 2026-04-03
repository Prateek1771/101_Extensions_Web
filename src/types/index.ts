export interface Extension {
  no: string;
  name: string;
  fn: string;
  cat: string;
  tags: string[];
  rc: string;
  tc: string;
  href: string;
  desc: string;
}

export interface ThemeContextType {
  dark: boolean;
  toggle: () => void;
}
