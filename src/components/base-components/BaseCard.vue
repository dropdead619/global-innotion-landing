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
      @apply bg-white rounded-3xl sm:(rounded-4xl);
    }

    &--dark {
      @apply bg-black rounded-3xl sm:(rounded-4xl);
    }

    &--xxs {
      @apply p-5 sm:(px-10 py-6) ;
    }

    &--xs {
      @apply p-8;
    }

    &--sm {
      @apply py-8 px-10;
    }

    &--md {
      @apply p-6 sm:p-10 ;
    }
}
</style>
