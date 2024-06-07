<template>
  <div v-if="onLoading" class="page-loading bg-loading_background">
    <div class="flex flex-col justify-center items-center min-h-screen">
      <img
        class="w-60 md:w-96 xxl:w-auto pb-3"
        :src="voha_logo"
        alt="loading"
      />
      <p class="text-lg md:text-xl text-white">{{ t("other.load") }}</p>
      <div class="loader-container mt-6 w-60">
        <div class="loader-track bg-loading_input">
          <div class="loader bg-gold" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import voha_logo from "../assets/images/vohalogo.png";
import { useI18n } from "vue-i18n";
const progress = ref(0);
const onLoading = ref(true);
const { t } = useI18n();

setTimeout(() => {
  if (progress.value != 100) progress.value = 30;
}, 2000);
setTimeout(() => {
  if (progress.value != 100) progress.value = 70;
}, 4000);
setTimeout(() => {
  if (progress.value != 100) progress.value = 100;
}, 5000);

// onMounted(() => {
//   progress.value = 0;
//   // document.onreadystatechange = () => {
//   // };
//   console.log(document.readyState);
//   alert(document.readyState);
//   document.addEventListener("readystatechange", () => {
//     if (document.readyState == "complete") progress.value = 100;
//   });
//   if (document.readyState == "complete") progress.value = 100;
// });

watch(
  () => progress.value,
  (newVal, oldVal) => {
    if (newVal == 100 && oldVal) {
      setTimeout(() => {
        onLoading.value = false;
      }, 800);
    } else if (newVal == 100) {
      onLoading.value = false;
    }
  }
);
</script>

<style scoped>
.page-loading {
  @apply fixed inset-0 z-[5000];
}
.loader-container {
  height: 5px; /* Adjust height as needed */
  background-color: #f3f3f3;
  border-radius: 10px; /* Rounded corners */
  overflow: hidden; /* Hide overflow */
}

.loader-track {
  height: 100%;
}

.loader {
  height: 100%;
  transition: width 0.6s ease;
  border-radius: 10px; /* Rounded corners */
}
</style>
import { useI18n } from "vue-i18n"; , useI18n, useI18n
