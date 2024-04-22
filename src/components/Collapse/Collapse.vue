<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import type { NameType } from "./types";
import { CollapseItemContextKey } from "./types";

defineOptions({
  name: "VKCollapse",
});

defineProps({
  modelValue: [String, Array],
  accordion: Boolean,
});

const activeNames = ref<NameType[]>([]);

function handleCollapseItemClick(name: NameType) {
  const index = activeNames.value.findIndex((item) => item === name);

  if (index > -1) {
    activeNames.value.splice(index, 1);
  } else {
    activeNames.value.push(name);
  }
}

provide(CollapseItemContextKey, {
  activeNames,
  handleCollapseItemClick,
});
</script>

<style scoped></style>
