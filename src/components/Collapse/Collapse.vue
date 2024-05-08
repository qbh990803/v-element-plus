<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from "vue";
import type { NameType, CollapseProps, CollapseEmits } from "./types";
import { CollapseContextKey } from "./types";

defineOptions({
  name: "VKCollapse",
});

const props = defineProps<CollapseProps>();

const emits = defineEmits<CollapseEmits>();

const activeNames = ref<NameType[]>(props.modelValue);

if (props.accordion && props.modelValue.length > 1) {
  console.warn("accordion mode should only have one active item");
}

watch(
  () => props.modelValue,
  (newVal) => {
    activeNames.value = newVal;
  }
);

function handleItemClick(name: NameType) {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? "" : name];
  } else {
    const index = activeNames.value.findIndex((item) => item === name);

    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(name);
    }
  }

  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
}

provide(CollapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

<style scoped></style>
