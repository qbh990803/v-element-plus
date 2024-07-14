import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icon from "../Icon/Icon.vue"; 

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
    // class
    expect(wrapper.classes()).toContain('vk-button--primary')
    // slot
    expect(wrapper.get('button').text()).toBe('button')
    // events
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disabled button', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: "button",
      },
    });
    // attributes
    expect(wrapper.attributes('disabled')).toBeDefined()
    // attributes 
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    // events
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon button', () => {
    const wrapper = mount(Button, {
      props: {
        icon:'arrow-up'
      },
      slots: {
        default: "icon",
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    });
    console.log(wrapper.html())
    const iconEl = wrapper.findComponent(FontAwesomeIcon)
    expect(iconEl.exists()).toBe(true)
    expect(iconEl.attributes('icon')).toBe('arrow-up')
  })
  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: "loading",
      },
      global: {
        stubs: ['Icon']
      }
    });
    console.log(wrapper.html())
    const iconEl = wrapper.findComponent(Icon)
    expect(iconEl.exists()).toBe(true)
    expect(iconEl.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
});
