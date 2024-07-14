import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button.vue", () => {
  test("basic button", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
      },
      slots: {
        default: "button",
      },
    });
    console.log(wrapper.html())
    expect(wrapper.classes()).includes('vk-button-primary')
  });   
});
