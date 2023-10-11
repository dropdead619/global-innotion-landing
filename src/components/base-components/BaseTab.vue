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
  <div class="base-tab" :class="[`base-tab--${variant}`, `base-tab--${size}`]">
    <BaseText
      class="cursor-default"
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
  @apply flex items-center justify-center;
  &--dark {
    @apply bg-dark rounded-[3.625rem];
  }

  &--light {
    @apply bg-white rounded-[4.875rem];
  }

  &--gray {
    @apply bg-[#F8F8F8] rounded-[3.625rem];
  }

  &--sm {
    @apply py-3 px-6;
  }

  &--md {
    @apply py-6.5 px-9;
  }
}
</style>
