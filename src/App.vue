<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "@/components/Button/Button.vue";
import type { ButtonInstance } from "@/components/Button/types";
import Collapse from "@/components/Collapse/Collapse.vue";
import CollapseItem from "@/components/Collapse/CollapseItem.vue";
import Icon from "@/components/Icon/Icon.vue";
import Alert from "@/components/Alert/Alert.vue";

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

function hello() {
  alert('hello world')
}
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
  <Icon icon="arrow-right" type="info" color="red" />
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
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">arrow</Button>
    <br />
    <br />
    <div>{{ activeNames }}</div>
    <Collapse v-model="activeNames" accordion>
      <CollapseItem title="Title 1" name="1">
        <div>Header title</div>
        <div>Content 1</div>
      </CollapseItem>
      <CollapseItem name="2">
        <template #title>
          <div>custom title</div>
        </template>
        custom Content
      </CollapseItem>
      <CollapseItem name="3" title="Title 3" disabled>Content 3</CollapseItem>
    </Collapse>
    <br />
    <br />
    <Alert type="success" show-icon closable close-text="Gotcha" @close="hello">
      <template #title>Custom Alert2</template>
      <span>Success Content</span>
    </Alert>
    <Alert
      title="Center Alert3"
      type="info"
      description="Info Content"
      show-icon
      center
      closable
    />
    <Alert title="Alert4" type="warning" show-icon closable >
      <span>Warning Content</span>
    </Alert>
    <Alert title="Alert5" type="error" show-icon closable />
    <br />
    <br />
    <Alert title="Alert2" type="success" effect="dark" closable />
    <Alert title="Alert3" type="info" effect="dark" closable /> 
    <Alert title="Alert4" type="warning" effect="dark" closable />
    <Alert title="Alert5" type="error" effect="dark" closable />
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
