<script setup lang="ts">
import type { PropType } from 'vue';

  type InputVariantType = 'number' | 'text' | 'password';

const props = defineProps({
  /**
     * ID of the input field
     */
  id: {
    type: String,
    required: true,
  },
  /**
     * Placeholder of input field
     */
  placeholder: {
    type: String,
    default: '-',
  },
  /**
     * Error state of the input field
     */
  error: {
    type: String,
    default: '',
  },
  /**
     * Value of the input field
     * @model
     */
  modelValue: {
    type: [String, Number] as PropType<number | string | null | undefined>,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<InputVariantType>,
    default: 'text',
  },
});

const emit = defineEmits(['update:modelValue']);

function onInput(e: Event) {
  const value: string | number = (e.target as HTMLInputElement).value;

  emit('update:modelValue', value);
}
</script>

<template>
  <div class="h-fit">
    <div
      class="flex flex-col h-fit w-full"
    >
      <input
        :id="id"
        class="font-medium bg-[#181818] border-1 border-[#FFFFFF14] rounded-2xl text-white text-base w-full py-5 px-8 leading-6"
        :disabled="disabled"
        :inputmode="props.type === 'number' ? 'numeric' : 'text'"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="onInput"
      >
    </div>

    <span v-if="error" class="mt-1 text-error text-xs block">
      <!-- @slot slot for input error message -->
      <slot name="error">
        {{ error }}
      </slot>
    </span>
  </div>
</template>

  <style scoped>
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #4B970F inset !important;
}

/*Change text in autofill textbox*/
input:-webkit-autofill{
    -webkit-text-fill-color: white !important;
}
  </style>
