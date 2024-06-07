<template>
  <div class="rangeSliderComp">
    <div class="rangeInp">
      <div class="slider">
        <div
          class="progress"
          :style="{
            left: rangeMinVal[0] + '%',
            right: rangeMinVal[1] + '%',
          }"
        ></div>
      </div>
      <div class="range-input">
        <input
          type="range"
          id="range-min"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          :step="props.steps"
          :value="props.value[0]"
          v-model.number="rangeInput[0]"
          @input="setChangeSlider"
        />
        <input
          type="range"
          class="range-max"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          :step="props.steps"
          :value="props.value[1]"
          v-model.number="rangeInput[1]"
          @input="setChangeSlider"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  steps: { type: Number, default: 5 },
  maxValue: { type: Number, default: 200 },
  value: { type: Array },
});

let rangeInput = ref([0, props.maxValue]); // 0 uzs dan 10000 gacha
let priceMinMax = ref({ min: 0, max: props.maxValue }); // uzgarmas qiymatlar. input bosh va oxirgi qiymatlari
let rangeMinVal = ref([0, 0]); // left:0% Right:0%
let priceTMP = ref(0);
const emit = defineEmits(["update:modelValue"]);
function setChangeSlider() {
  if (rangeInput.value[0] > rangeInput.value[1]) {
    priceTMP.value = rangeInput.value[1];
    rangeInput.value[1] = rangeInput.value[0];
    rangeInput.value[0] = priceTMP.value;
  }

  rangeMinVal.value[0] = (rangeInput.value[0] / priceMinMax.value.max) * 100;
  rangeMinVal.value[1] =
    100 - (rangeInput.value[1] / priceMinMax.value.max) * 100;

  emit("update:modelValue", rangeInput.value);
}
watch(
  () => props.value,
  () => {
    rangeInput.value = props.value;
    setChangeSlider();
    emit("update:modelValue", rangeInput.value);
  }
);
</script>

<style scoped>
.slider {
  height: 4px;
  position: relative;
  background: var(--opacity40);
  border-radius: 2px;
}
.slider .progress {
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background: #fff;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -4px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: var(--gold);
  border: 1px solid var(--gold);
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 12px;
  width: 12px;
  border: none;
  border-radius: 50%;
  background: #fff;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>
