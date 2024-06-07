<template>
  <RouterView v-slot="{ Component }">
    <transition :name="route.meta.transition || 'layout'" mode="out-in">
      <div :key="route.name">
        <component :is="detectLayout">
          <transition mode="out-in" name="fade">
            <div class="min-h-[100vh]">
              <Component :is="Component" />
            </div>
          </transition>
        </component>
      </div>
    </transition>
  </RouterView>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layout/DefaultLayout.vue";
import LoginLayout from "./layout/LoginLayout.vue";

const layouts = {
  default: DefaultLayout,
  login: LoginLayout,
};

const route = useRoute();

const detectLayout = computed(() => {
  return layouts[route.meta.layout || "default"];
});
</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
