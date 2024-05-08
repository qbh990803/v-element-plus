<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "@/components/Button/Button.vue";
import type { ButtonInstance } from "@/components/Button/types";
import Collapse from "@/components/Collapse/Collapse.vue";
import CollapseItem from "@/components/Collapse/CollapseItem.vue";

const buttonRef = ref<ButtonInstance | null>(null);

const activeNames = ref(["1"]);
onMounted(() => {
  if (buttonRef.value) {
    console.log("buttonRef.value", buttonRef.value.ref);
  }

  setTimeout(() => {
    activeNames.value = ["2"];
  }, 2000);
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <Button ref="buttonRef">test Button</Button>
    <Button plain>plain Button</Button>
    <Button round>round Button</Button>
    <Button circle>vk</Button>
    <Button disabled>disabled Button</Button>
    <br />
    <br />
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="info">info</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <br />
    <br />
    <Button type="primary" plain>primary plain</Button>
    <Button type="success" plain>success plain</Button>
    <Button type="info" plain>info plain</Button>
    <Button type="warning" plain>warning plain</Button>
    <Button type="danger" plain>danger plain</Button>
    <br />
    <br />
    <Button size="large">large</Button>
    <Button size="small">small</Button>
    <br />
    <br />
    <div>{{ activeNames }}</div>
    <Collapse v-model="activeNames" accordion>
      <CollapseItem title="Title 1" name="1">Content 1</CollapseItem>
      <CollapseItem name="2">
        <template #title>
          <div>custom title</div>
        </template>
        custom Content
      </CollapseItem>
      <CollapseItem name="3" title="Title 3" disabled>Content 3</CollapseItem>
    </Collapse>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
