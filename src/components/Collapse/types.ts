import type { InjectionKey, Ref } from "vue";
export type NameType = string | number;

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseItemContext {
  activeNames: Ref<NameType[]>;
  handleCollapseItemClick: (name: NameType) => void;
}

export const CollapseItemContextKey: InjectionKey<CollapseItemContext> = Symbol(
  "CollapseItemContextKey"
);
