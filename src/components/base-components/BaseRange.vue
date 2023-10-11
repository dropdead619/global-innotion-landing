<script lang="ts" setup>
const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(['update:modelValue']);

const rangeInput = ref<number | null>(null);

watch(() => props.modelValue, (newValue) => {
  if (rangeInput.value)
    rangeInput.value = newValue;
});

function updateValue(event: Event) {
  emit('update:modelValue', parseInt((event.target as HTMLInputElement).value));
}
</script>

<template>
  <div class="range-container">
    <input
      ref="rangeInput"
      :max="max"
      :min="min"
      :step="step"
      type="range"
      :value="modelValue"
      @input="updateValue"
    >
    <div class="range-value">
      {{ value }}
    </div>
  </div>
</template>

<style scoped>
.range-container {
  display: flex;
  align-items: center;
}

input[type="range"] {
  flex: 1;
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background: linear-gradient(62.55deg, #E3FAFF -0.04%, #D7F1FF 92.54%);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(62.55deg, #2EB3DD -0.04%, #0C7CB3 92.54%);
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(62.55deg, #2EB3DD -0.04%, #0C7CB3 92.54%);
  cursor: pointer;
}

.range-value {
  margin-left: 10px;
}
</style>
