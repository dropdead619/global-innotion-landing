<script lang="ts" setup>
withDefaults(defineProps<{
  text: string
  variant?: 'dark' | 'light' | 'gray'
  size?: 'sm' | 'md'
}>(), {
  variant: 'dark',
  size: 'sm',
});
</script>

<template>
  <div class="base-tab group" :class="[`base-tab--${variant}`, `base-tab--${size}`]">
    <BaseText
      class="cursor-default transition transition-colors duration-500"
      :class="{
        '!text-xs sm:(!text-xl)': size === 'md',
        'group-hover:(text-white)': variant === 'light',
      }"
      :text-color="variant === 'dark' ? 'white' : 'dark'"
      :variant="size === 'sm' ? 'sm' : 'lg'"
      weight="medium"
    >
      {{ text }}
    </BaseText>
  </div>
</template>

<style lang="scss">
.base-tab {
  @apply flex transition transition-colors duration-500 items-center justify-center;
  &--dark {
    @apply bg-dark rounded-[3.625rem] hover:bg-[#161616];
  }

  &--light {
    @apply bg-white rounded-[4.875rem] hover:(bg-dark text-white) ;
  }

  &--gray {
    @apply bg-[#F8F8F8] rounded-[3.625rem];
  }

  &--sm {
    @apply py-2.5  px-6 sm:(py-3);
  }

  &--md {
    @apply py-2.5 px-4 sm:(py-6.5 px-9) ;
  }
}
</style>
