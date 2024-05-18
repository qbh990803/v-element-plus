<template>
  <div
    class="vk-alert"
    :class="{
      [`vk-alert--${type}`]: type,
      'is-light': effect === 'light',
      'is-dark': effect === 'dark',
      'is-center': center,
    }"
  >
    <Icon
      v-if="showIcon"
      class="vk-alert__icon"
      :icon="_icon_"
      :type="type"
    />
    <div class="vk-alert__content">
      <span class="vk-alert__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <p v-if="description" class="vk-alert__description">
        <slot>{{ description }}</slot>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Icon from "../Icon/Icon.vue";
import type { AlertProps } from "./types";

defineOptions({
  name: "VKAlert",
});

const props = withDefaults(defineProps<AlertProps>(), {
  effect: "light",
});

const _icon_ = computed(() => {
  const iconMap = new Map([
    ["success", ["fas", "circle-check"]],
    ["info", ["fas", "circle-info"]],
    ["warning", ["fas", "circle-exclamation"]],
    ["error", ["fas", "circle-xmark"]],
  ]);

  return props.type ? iconMap.get(props.type) : "";
});
</script>

<style scoped></style>
