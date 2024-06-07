<template>
  <div
    @click="handleInput"
    id="input-field"
    :class="[variant, props.classes, props.error ? 'error' : '']"
  >
    <label :for="props.name" v-if="!props.error">{{ props.label }}</label>
    <label :for="props.name" v-else>{{ props.error }} </label>
    <input
      :class="['input ']"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :min="props.min"
      :max="props.max"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  label: { type: String, default: "" },
  name: { type: String, default: "input" },
  error: { default: "" },
  variant: { type: String, default: "outline" },
  placeholder: { type: String, default: "" },
  classes: { type: String, default: "" },
  min: { type: String, default: "" },
  max: { type: String, default: "" },
});

const variants = {
  underline:
    "bg-transparent border-0 border-b placeholder:text-[#515151] text-[#515151] border-[#d4d4d4] focus:border-[#e4e4e4] py-1",
  dark: "bg-bg_opacity_30 placeholder:text-[#6A6A6A] text-white px-3 py-3 rounded-full w-full border border-dark focus:border-gold",
  outline:
    "bg-transparent placeholder:text-gray-100 text-darkgray px-3 py-2 rounded-xl w-full border border-inputborder",
};
const variant = computed(() => variants[props.variant]);
</script>

<style scoped>
#input-field {
  @apply flex flex-col items-start;
}
#input-field:has(input:focus) label {
  @apply text-primary;
}
#input-field:has(input:focus) {
  @apply border-primary;
}
.input {
  @apply w-full font-normal  duration-200 outline-none;
}
#input-field label {
  @apply text-secondary duration-200 text-xs;
}
#input-field input {
  @apply bg-transparent;
}

/* error */
#input-field.error {
  @apply border-error;
}
#input-field.error label {
  @apply text-error;
}
#input-field.error:has(input:focus) label {
  @apply text-error;
}
#input-field.error:has(input:focus) {
  @apply border-error;
}
</style>
