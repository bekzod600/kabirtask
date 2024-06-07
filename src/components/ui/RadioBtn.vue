<template>
  <label
    id="radioBtn"
    :class="[
      props.active ? 'after:bg-primary' : 'after:bg-inputborder',
      variantClass,
      props.error ? 'error' : '',
    ]"
    :for="props.val.name"
  >
    <input
      type="radio"
      class="hidden"
      :name="props.name"
      :id="props.val.name"
      :value="props.val.value"
      @input="emit('update:modelValue', $event.target.value)"
    />
    {{ props.val.name }}
  </label>
</template>

<script setup>
// import { computed } from "vue";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  name: { type: String, default: "radio" },
  val: { type: Object, default: {} },
  variant: { type: String, default: "regular" },
  active: { type: Boolean, default: false },
  error: { type: String, default: "" },
});

const variants = {
  regular: "regular-radio-btn",
  biznes: "biznes-radio-btn",
};

const variantClass = variants[props.variant];
</script>

<style scoped>
#radioBtn.biznes-radio-btn {
  @apply px-4 py-4 flex justify-center items-center border border-inputborder rounded-lg relative;
}
#radioBtn.biznes-radio-btn::after {
  content: "";
  @apply absolute bottom-1 left-4 right-4 h-[2px] rounded-full;
}

/* regular-radio-btn */

#radioBtn.regular-radio-btn {
  @apply text-blackgray relative pl-5;
}
#radioBtn.regular-radio-btn::before {
  content: "";
  @apply absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 rounded-full bg-transparent;
}
#radioBtn.regular-radio-btn::after {
  content: "";
  @apply absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 rounded-full bg-inputborder;
}
#radioBtn.regular-radio-btn:has(input:checked)::before {
  @apply bg-primary;
}
#radioBtn.regular-radio-btn:has(input:checked)::after {
  @apply w-2 h-2 bg-white translate-x-1/2;
}

/* error */
#radioBtn.biznes-radio-btn.error {
  @apply border-error;
}
</style>
