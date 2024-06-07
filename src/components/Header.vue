<template>
  <header id="header">
    <nav ref="nav" class="fixed z-[500] top-0 inset-x-0 shadow">
      <div class="bg-black py-2 text-white text-sm">
        <div class="container flex items-center justify-end gap-4">
          <ul class="flex gap-4 items-center">
            <li class="flex gap-1 items-center">
              <img :src="Searchimg" alt="search" />
              Search
            </li>
            <li>
              <RouterLink to="#">Support</RouterLink>
            </li>
            <li>
              <a href="tel:+998944455537">+998944455537</a>
            </li>
            <li>
              <RouterLink to="#">Request Demo</RouterLink>
            </li>
          </ul>
          <div class="w-[1px] h-4 bg-white rounded-full"></div>
          <ul class="flex gap-3">
            <li>
              <RouterLink to="#">Join</RouterLink>
            </li>
            <li>
              Host
              <i class="far fa-chevron-down text-white"></i>
            </li>
            <li>
              <RouterLink to="#">Sign In</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-[#ffffff7e] py-3">
        <div class="container flex items-center justify-between">
          <div class="pr-6">
            <img :src="ZoomImg" alt="zoom image" />
          </div>
          <ul class="flex gap-6 grow justify-start">
            <li v-for="item in navbar" :key="item.name">
              <RouterLink
                class="text-gray hover:text-primary"
                :to="item.route"
                >{{ item.name }}</RouterLink
              >
            </li>
          </ul>
          <div class="flex gap-3">
            <RouterLink to="#">
              <Button variant="outline">Contact Sales</Button>
            </RouterLink>
            <RouterLink to="#">
              <Button variant="contained">Sign Up Free</Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import Button from "../components/ui/Button.vue";
import ZoomImg from "../assets/icons/Zoom_logo.svg";
import Searchimg from "../assets/icons/search.svg";
import { onMounted, ref } from "vue";

const nav = ref(null);
const navbar = [
  { name: "Products", route: "#" },
  { name: "Solutions", route: "#" },
  { name: "Resources", route: "#" },
  { name: "Plan & Pricing", route: "#" },
];
onMounted(() => {
  const headerHight = nav.value.getBoundingClientRect().height;
  const header = document.getElementById("header");
  header.style.height = `${headerHight}px`;
});
</script>
