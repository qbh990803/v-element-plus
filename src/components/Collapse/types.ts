import type { InjectionKey, Ref } from "vue";
export type NameType = string | number;

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}

export interface CollapseEmits {
  (e: "update:modelValue", values: NameType[]): void;
  (e: "change", values: NameType[]): void;
}

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export const CollapseContextKey: InjectionKey<CollapseContext> =
  Symbol("CollapseContextKey");
