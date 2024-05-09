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
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick(name)"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <Transition name="slide" v-on="transitionEvent">
      <div class="vk-collapse-item__wrapper" v-show="isActive">
        <div
          :id="`vk-collapse-item__content--${name}`"
          class="vk-collapse-item__content"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import type { CollapseItemProps, NameType } from "./types";
import { CollapseContextKey } from "./types";

const props = defineProps<CollapseItemProps>();

const collapseContext = inject(CollapseContextKey);

const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});

function handleClick(name: NameType) {
  console.log("name", name);
  if (props.disabled) return;
  collapseContext?.handleItemClick(name);
}

const transitionEvent: Record<string, (el: HTMLDivElement) => void> = {
  beforeEnter(el) {
    el.style.height = "0px";
    el.style.overflow = "hidden";
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  },
  leave(el) {
    el.style.height = "0px";
  },
  afterLeave(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
};
</script>

<style scoped></style>
