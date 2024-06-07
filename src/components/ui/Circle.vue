<template>
  <span
    :class="[
      'w-[28px] lg:w-[32px] aspect-square flex justify-center items-center duration-200 cursor-pointer',
      variant,
      hover,
      type,
      classes,
    ]"
  >
    <slot></slot>
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "light" },
  classes: { type: String, default: "" },
  active: { type: Boolean, default: false },
  type: { type: String, default: "circle" },
  hover: { type: String, default: "light" },
});
const variants = {
  light: "bg-white text-[#151515] border border-white",
  gold: "bg-gold text-white border border-gold",
  dark: "bg-[#151515] text-white border border-[#151515]",
  outline: "text-white border border-white",
  none: "",
};
const hovers = {
  light: "hover:border-[#151515] hover:bg-[#151515] hover:text-white",
  dark: "hover:bg-white hover:text-[#151515]",
  outline: "hover:bg-white hover:text-[#151515]",
  gold: "hover:bg-gold hover:text-white hover:border-gold",
  none: "",
};
const types = {
  circle: "rounded-full",
  square: "rounded-[12px]",
};
const variant = computed(() => variants[props.variant]);
const type = computed(() => types[props.type]);
const hover = computed(() => hovers[props.hover]);
</script>
