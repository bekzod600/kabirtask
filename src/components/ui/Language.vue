<template>
  <div class="cursor-pointer relative z-[1000]">
    <div
      :class="[
        'select-language duration-200 flex items-center',
        handleLang
          ? 'bg-white rounded-xl'
          : 'hover:bg-primary bg-transparent hover:border-primary rounded-xl',
      ]"
      @click="openLangMenu"
    >
      <span :class="['pr-1 duration-200 text-darkgray']">
        {{ language }}
      </span>
      <!-- <ArrowTop :active="handleLang" /> -->
      <!-- <img v-if="!handleLang" :src="arrowTop" alt="arrow-top" /> -->
      <!-- <img v-else :src="arrowDown" alt="arrow-down" /> -->
    </div>
    <ul class="lang-list" v-if="handleLang">
      <li v-for="lang in langData" @click="selectLang(lang)" class="lang-item">
        {{ lang.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
// import bus from "vue3-eventbus";

const { locale } = useI18n();
const language = ref("Ру");

if (localStorage.getItem("lng")) {
  language.value = JSON.parse(localStorage.getItem("lng")).name;
}

const handleLang = ref(false);

const langData = reactive([
  { name: "Uz", value: "uz", active: true },
  { name: "Ру", value: "ru", active: false },
  { name: "En", value: "en", active: false },
]);
function openLangMenu() {
  handleLang.value = !handleLang.value;
  // bus.emit("handleContactMenu");
}
function selectLang(lang) {
  localStorage.setItem("lng", JSON.stringify(lang));
  locale.value = lang.value;
  language.value = lang.name;
  handleLang.value = false;
}
// bus.on("handleLangMenu", (val) => (handleLang.value = false));
</script>

<style>
.select-language {
  @apply lg:border lg:border-primary px-4 py-1.5 flex gap-1;
}
.lang-list {
  @apply absolute top-full inset-x-0 z-50 bg-white rounded-xl text-black shadow-md;
}
.lang-item {
  @apply p-3 hover:text-primary rounded-full duration-200;
}
</style>
