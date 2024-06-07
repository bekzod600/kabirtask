<template>
  <label
    id="radioBtn"
    :class="[variantClass, inputValue ? 'active' : '']"
    :for="props.label"
  >
    <input
      type="checkbox"
      class="hidden"
      :id="props.label"
      v-model="inputValue"
      @input="(e) => handleClick(e)"
    />
    {{ props.label }}
  </label>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  variant: { type: String, default: "check" },
  active: { type: Boolean, default: false },
});
const inputValue = ref(props.active);

function handleClick(e) {
  emit("update:modelValue", e.target.checked);
}

const variants = {
  check: "check-btn",
};

const variantClass = variants[props.variant];
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
/* check-btn */

#radioBtn.check-btn {
  @apply text-blackgray relative pl-6;
}
#radioBtn.check-btn::before {
  content: "";
  @apply absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 rounded-sm bg-transparent;
}
#radioBtn.check-btn::after {
  content: "";
  @apply absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 rounded-sm bg-inputborder;
}
#radioBtn.check-btn.active::before {
  @apply bg-primary;
}
#radioBtn.check-btn.active::after {
  @apply w-2 h-2 bg-white translate-x-1/2;
}
</style>
