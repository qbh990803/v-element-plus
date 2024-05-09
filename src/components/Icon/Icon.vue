<template>
  <i class="vk-icon">
    <FontAwesomeIcon v-bind="$props" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { IconProps } from "./types";

defineOptions({
  name: "VKIcon",
  inheritAttrs: false,
});

defineProps<IconProps>();
</script>

<style scoped></style>
