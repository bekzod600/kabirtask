<template>
  <button
    :type="props.type"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
    :class="[
      buttonVariant,
      props.disabled || props.loading ? 'opacity-30' : 'opacity-100 ',
      'py-1.5 px-5',
      props.classes,
    ]"
  >
    <template v-if="props.loading">
      <i class="flex justify-center">
        <svg
          class="circular-loader stroke-black hover:stroke-white"
          viewBox="25 25 50 50"
        >
          <circle
            class="circular-loader__path"
            cx="52"
            cy="52"
            r="20"
            fill="none"
          />
        </svg>
      </i>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "light" },
  classes: { type: String, default: "dark" },
  type: { type: String, default: "submit" },
  disabled: { default: false },
  loading: { type: Boolean, default: false },
});
const buttonVariants = {
  contained:
    "text-white bg-primary border border-primary font-bold rounded-full hover:bg-[#004CE5]",
  outline:
    "border-primary font-bold text-primary border bg-transparent hover:bg-light-blue rounded-full",
  none: "text-white font-light rounded-xl",
};
const buttonVariant = computed(() => buttonVariants[props.variant]);

const emit = defineEmits(["handleClick"]);
const handleClick = () => {
  emit("handleClick");
};
</script>

<style scoped>
.circular-loader {
  width: 18.09px;
  height: 18px;
  /* stroke: #000; */
}

.circular-loader__path {
  fill: none;
  stroke-width: 5px;
  stroke-linecap: round;
  animation: animate-stroke 1s ease-in-out infinite;
}

@keyframes animate-stroke {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
</style>
