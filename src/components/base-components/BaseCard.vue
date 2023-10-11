<script setup lang="ts">
defineProps({
  size: {
    type: String as PropType<'xxs' | 'xs' | 'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  variant: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
});
</script>

<template>
  <div class="card" :class="[`card--${size}`, `card--${variant}`]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply flex flex-col;
    &--light {
      @apply bg-white rounded-4xl;
    }

    &--dark {
      @apply bg-black rounded-4xl;
    }

    &--xxs {
      @apply py-6 px-10;
    }

    &--xs {
      @apply p-8;
    }

    &--sm {
      @apply py-8 px-10;
    }

    &--md {
      @apply p-10;
    }
}
</style>
