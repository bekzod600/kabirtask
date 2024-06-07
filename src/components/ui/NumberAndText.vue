<template>
  <div id="number_and_text">
    <div></div>
    <div></div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: "free_close" },
  number: { type: Number, required: true },
});
const variants = ["free_close"];
</script>
