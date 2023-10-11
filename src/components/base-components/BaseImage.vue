<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  /**
       * Button type
       * @values primary, secondary
       */
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
});
</script>

<template>
  <div
    class="base-image"
    :class="`base-image--${variant}`"
  >
    <slot />
  </div>
</template>

  <style lang="scss">
  .base-image{
    @apply h-full rounded-4xl overflow-hidden;
    &--primary {
      img {
        @apply h-full w-full transform hover:(scale-110);
      }
    }
    img {
      object-fit: cover;
      @apply transition-transform duration-1000;
    }
  }
  </style>
