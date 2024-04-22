<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      :id="`vk-collapse-item__header--${name}`"
      class="vk-collapse-item__header"
      @click="handleClick(name)"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      :id="`vk-collapse-item__content--${name}`"
      class="vk-collapse-item__content"
      v-show="isActive"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import type { CollapseItemProps, NameType } from "./types";
import { CollapseItemContextKey } from "./types";

const props = defineProps<CollapseItemProps>();

const collapseItemContext = inject(CollapseItemContextKey);

const isActive = computed(() => {
  return collapseItemContext?.activeNames.value.includes(props.name);
});

function handleClick(name: NameType) {
  console.log("name", name);
  if (props.disabled) return;
  collapseItemContext?.handleCollapseItemClick(name);
}
</script>

<style scoped>
.vk-collapse-item__header {
  font-size: 20px;
}
</style>
