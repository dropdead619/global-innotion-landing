<script lang="ts" setup>
withDefaults(defineProps<{
  text: string
  variant?: 'dark' | 'light'
}>(), {
  variant: 'dark',
});
</script>

<template>
  <div class="base-tab" :class="`base-tab--${variant}`">
    <BaseText
      :text-color="variant === 'dark' ? 'white' : 'dark'"
      :variant="variant === 'dark' ? 'sm' : 'lg'"
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
    @apply bg-dark rounded-[3.625rem] h-11 py-2.25 px-6;
  }

  &--light {
    @apply bg-white rounded-[4.875rem] py-6.5 px-9;
  }
}
</style>
