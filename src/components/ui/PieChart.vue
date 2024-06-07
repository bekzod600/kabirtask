<template>
  <div>
    <div
      class="pie animate"
      :style="{ '--p': props.percent, '--c': props.color, '--b': '10px' }"
    >
      <p class="text-base font-semibold">
        <slot></slot>
      </p>
    </div>
    <p class="text-gray text-sm py-2">
      <slot name="title"></slot>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  percent: { type: Number, default: 10 },
  color: { type: String, default: "black" },
  borderWidth: { type: String, default: "10px" },
});
</script>

<style scoped>
@property --p {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

.pie {
  --p: 20;
  --b: 22px;
  --c: darkred;
  --w: 140px;

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 25px;
  font-weight: bold;
  color: gray;
}
.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.pie:before {
  inset: 0;
  background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
      var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p) * 1%), #ededed 0);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - var(--b)),
    #000 calc(100% - var(--b))
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - var(--b)),
    #000 calc(100% - var(--b))
  );
}
.pie:after {
  inset: calc(50% - var(--b) / 2);
  background: var(--c);
  transform: rotate(calc(var(--p) * 3.6deg))
    translateY(calc(50% - var(--w) / 2));
}
.animate {
  animation: p 1s 0.5s both;
}
.no-round:before {
  background-size: 0 0, auto;
}
.no-round:after {
  content: none;
}
@keyframes p {
  from {
    --p: 0;
  }
}
</style>
