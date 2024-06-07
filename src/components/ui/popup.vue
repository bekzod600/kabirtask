<template>
  <div
    v-if="props.showPopup"
    class="absolute inset-0 z-[600] bg-bg_opacity_30 backdrop-blur-sm flex justify-center items-center"
  >
    <div class="absolute inset-0 -z-10" @click="emit('closePopup')"></div>
    <!-- <div class="absolute inset-0 z-[500] bg-bg_opacity_30"></div> -->
    <div class="bg-dark p-[16px] md:p-[32px] rounded-bigger">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["showPopup"]);
const emit = defineEmits(["closePopup"]);
</script>
