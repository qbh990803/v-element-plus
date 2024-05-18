export type AlertType = "success" | "warning" | "info" | "error";
export type VKEffect = "light" | "dark";

export interface AlertProps {
  title?: string;
  type?: AlertType;
  effect?: string;
  description?: string;
  closable?: boolean;
  center?: boolean;
  closeText?: string;
  showIcon?: boolean;
}

export interface AlertEmits {
  (e: "close", values: MouseEvent): void;
}
