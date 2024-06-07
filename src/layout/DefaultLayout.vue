<template>
  <div id="default-layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
