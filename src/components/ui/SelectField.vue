<template>
  <div
    @click="handleClick"
    id="select-field"
    :class="[classes, props.error ? 'error' : '']"
  >
    <span v-if="props.error" for="selectfield" class="text-error">{{
      props.error
    }}</span>
    <label v-else for="selectfield">{{ props.label }}</label>
    <select
      id="selectfield"
      @change="updateValue"
      class="select outline-none bg-transparent"
    >
      <option value=""><slot /></option>
      <template v-for="opt in props.options" :key="opt.value">
        <option :value="opt.value" :selected="opt.selected">
          {{ opt.name }}
        </option>
      </template>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "select" },
  options: { type: Array, default: [] },
  label: { type: String, default: "" },
  classes: { type: String, default: "" },
  error: { type: String, default: "" },
});
const emit = defineEmits(["update:modelValue"]);

const updateValue = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style scoped>
#select-field {
  @apply flex flex-col border border-inputborder px-3 py-2 rounded-xl;
}
#select-field.error {
  @apply border-error;
}
#select-field:has(select:focus) {
  @apply border-primary;
}
#select-field:has(select:focus) label {
  @apply text-primary;
}
#select-field .options {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}
#select-field label {
  @apply text-secondary text-xs outline-none focus-visible:border-0;
}
</style>
