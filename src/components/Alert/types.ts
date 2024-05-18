export type AlertType = "success" | "warning" | "info" | "error";
export type VKEffect = "light" | "dark";

export interface AlertProps {
  title?: string;
  type?: AlertType;
  effect?: string;
  description?: string;
  closable?: boolean;
  center?: boolean;
  closeText?: boolean;
  showIcon?: boolean;
}
