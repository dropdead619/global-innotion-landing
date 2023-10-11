<script setup lang="ts">
  type Variant = 'xs' | 'sm' | 'md' | 'lg' | 'base' | 'xl' | '2xl' | '4xl' | '5xl';
  type Weight = 'normal' | 'bold' | 'semibold' | 'medium';

withDefaults(defineProps<{ variant?: Variant; weight?: Weight; heading?: 'h1' | 'h2' | 'h3'; textColor?: 'white' | 'dark' }>(), {
  variant: 'sm',
  weight: 'normal',
  textColor: 'dark',
});
</script>

<template>
  <Component
    :is="heading ? heading : 'p'"
    class="base-text"
    :class="[
      variant && !heading && `base-text--${variant}`,
      heading && `base-text--${heading}`,
      weight && `base-text--${weight}`,
      textColor && `base-text--${textColor}`,
    ]"
  >
    <!-- @slot default slot for content -->
    <slot />
  </Component>
</template>

  <style lang="scss">
  .base-text {
    // Weights
    &--bold {
      @apply font-bold;
    }

    &--normal {
      @apply font-normal;
    }

    &--medium {
      @apply font-medium;
    }

    &--semibold {
      @apply font-semibold;
    }

    // Colors

    &--white {
    @apply text-white;
    }

    &--dark {
    @apply text-black;
    }

    // Sizes

    // 16px
    &--sm {
      font-size: 1rem;
      line-height: 1.375rem;
    }
    // 18px
    &--md {
      font-size: 1.125rem;
      line-height: 1.5rem; /* 133.333% */
    }
    // 20px
    &--lg {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    // 32px
    &--xl {
      font-size: 2rem;
      line-height: 2.5rem; /* 125% */
    }
    // 48px
    &--1xl {
      font-size: 3rem;
      line-height: 3.5rem; /* 116.667% */
    }

    // 24px
    &--h3 {
      font-size: 1.5rem;
      font-weight: 450;
      line-height: 2rem;
    }
    // 64px
    &--h2 {
      font-size: 4rem;
      font-weight: 450;
      line-height: 4.5rem;
    }
    // 72px
    &--h1 {
      font-size: 4.5rem;
      font-weight: 450;
      line-height: 5rem; /* 111.111% */
    }
  }
  </style>
