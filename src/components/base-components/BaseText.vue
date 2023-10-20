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
      @apply font-normal;
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
      line-height: 1.375rem;
      @apply text-sm sm:(text-base) ;
    }
    // 18px
    &--md {
      font-size: 1.125rem;
      line-height: 1.5rem; /* 133.333% */
    }
    // 20px
    &--lg {
      @apply text-base leading-6 sm:(text-[1.25rem] leading-7) ;
    }
    // 32px
    &--xl {
      @apply text-[20px] leading-7 sm:(text-[2rem] leading-10) ;
    }
    // 48px
    &--1xl {
      @apply text-[28px] leading-[36px] sm:(text-[3rem] leading-[3.5rem]) ;
    }

    // 24px
    &--h3 {
      @apply text-[20px] leading-[28px] sm:(text-[24px] leading-8) ;
    }
    // 64px
    &--h2 {
      @apply text-[28px] leading-[36px] sm:(text-[64px] leading-18) ;
    }
    // 72px
    &--h1 {
      @apply text-[28px] leading-[32px] sm:(text-5xl leading-12) lg:(text-7xl leading-20) ;
    }
  }
  </style>
