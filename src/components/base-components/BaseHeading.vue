<script setup lang="ts">
import type { PropType } from 'vue';

  type HType = 'h1' | 'h2' | 'h3' | 'h4';

defineProps({
  tag: {
    type: String as PropType<HType>,
    default: 'h1',
  },
});
</script>

<template>
  <Component
    :is="tag"
    class="base-heading"
    :class="[
      tag && `base-heading--${tag}`,
    ]"
  >
    <!-- @slot default slot for content -->
    <slot />
  </Component>
</template>

  <style lang="scss">
  .base-heading {
    @apply font-bold;
    &--h1 {
      @apply text-primary text-[32px] leading-[32px]  sm:(text-[54px]  leading-13)  lg:(text-[64px] leading-16)  ;
    }
    &--h2 {
      @apply text-2xl sm:(text-[40px] leading-14) ;
    }
    &--h3 {
      @apply text-2xl sm:(text-4xl leading-12) ;
    }
    &--h4 {
      @apply text-[24px] leading-12 text-primary;
    }
  }
  </style>
