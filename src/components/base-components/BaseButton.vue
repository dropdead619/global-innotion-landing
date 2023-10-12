<script setup lang="ts">
import type { PropType } from 'vue';

  type ButtonVariant = 'primary' | 'secondary' | 'transparent' | 'white';

defineProps({
  /**
       * Button type
       * @values primary, secondary
       */
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
  },
});

const attrs = useAttrs();

const tag = computed(() => {
  if (attrs.to)
    return 'NuxtLink';
  else if (attrs.href)
    return 'a';
  else
    return 'button';
});
</script>

<template>
  <Component
    :is="tag"
    class="btn"
    :class="`btn--${variant}`"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </Component>
</template>

  <style lang="scss" scoped>
  .btn {
    @apply cursor-pointer transition-colors duration-300;

    &--primary {
      font-size: 1.25rem;
      font-weight: 450;
      line-height: 1.5rem;
      @apply bg-transparent border-solid border-white border-1 rounded-6xl py-3 px-8 sm:(py-4) !text-white hover:(bg-white !text-dark) ;
    }
  }
  </style>
