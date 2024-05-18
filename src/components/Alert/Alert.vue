<template>
  <Transition name="fade">
    <div
      v-show="visible"
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
        :class="{ ['is-big']: description || $slots.default }"
        :icon="_icon_"
        :type="type"
      />
      <div class="vk-alert__content">
        <span
          class="vk-alert__title"
          :class="{ ['with-description']: description }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="description || $slots.default" class="vk-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <Icon
          v-if="closable && !closeText"
          class="vk-alert__close-btn"
          :icon="['fas', 'xmark']"
          @click="close"
        />
        <div
          v-else
          class="vk-alert__close-btn"
          :class="{ ['is-customed']: closeText }"
          @click="close"
        >
          {{ closeText }}
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Icon from "../Icon/Icon.vue";
import type { AlertProps, AlertEmits } from "./types";

defineOptions({
  name: "VKAlert",
});

const props = withDefaults(defineProps<AlertProps>(), {
  effect: "light",
  type: "info",
});

const emits = defineEmits<AlertEmits>();

const visible = ref(true);

const _icon_ = computed(() => {
  const iconMap = new Map([
    ["success", ["fas", "circle-check"]],
    ["info", ["fas", "circle-info"]],
    ["warning", ["fas", "circle-exclamation"]],
    ["error", ["fas", "circle-xmark"]],
  ]);

  return props.type ? iconMap.get(props.type) || "" : "";
});

function close(evt: MouseEvent) {
  visible.value = false;
  emits("close", evt);
}
</script>

<style scoped></style>
