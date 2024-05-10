<template>
  <i
    class="vk-icon"
    :class="{ [`vk-icon--${type}`]: type }"
    :style="customColor"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { CSSProperties } from "vue";
import { omit } from "lodash-es";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconProps } from "./types";

defineOptions({
  name: "VKIcon",
  inheritAttrs: false,
});

const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ["type", "color"]));

const customColor = computed<CSSProperties>(() => {
  return props.color ? { color: props.color } : {};
});
</script>

<style scoped></style>
