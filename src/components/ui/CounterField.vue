<template>
  <div id="counterBtn">
    <span class="inline-block text-secondary text-xs pt-2 px-3">{{
      name
    }}</span>
    <div class="flex gap-1 items-center">
      <button @click="dec" class="inc btn">
        <img class="w-4" :src="minus" alt="minus" />
      </button>
      <input type="number" :value="count" />
      <button @click="inc" class="dec btn">
        <img class="w-4" :src="plus" alt="plus" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

const props = defineProps({
  value: { type: Number, default: 0 },
  name: { type: String, default: "" },
});

const count = ref(props.value);

function inc() {
  count.value++;
  emit("update:modelValue", count.value);
}
function dec() {
  count.value--;
  emit("update:modelValue", count.value);
}

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
#counterBtn {
  @apply border border-inputborder rounded-xl;
}
#counterBtn .btn {
  @apply px-2 py-1;
}
#counterBtn input {
  @apply w-8 text-center outline-none;
}
#counterBtn input[type="number"]::-webkit-inner-spin-button,
#counterBtn input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
