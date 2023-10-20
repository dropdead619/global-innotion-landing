<script setup lang="ts">
const infoTabs = ref([
  'с нуля',
  '3 месяца',
  '4 месяца',
]);

const technologiesTabs = ref([
  'Unreal Engine',
  'Unity',
  'Visual Effects',
  'UX/UI Design',
  '3D graphics',
  'Sound Effects',
  'Blueprint',
]);
</script>

<template>
  <div class="hero-block">
    <div class="flex flex-col hero-block__content items-start">
      <div class="flex mb-10 gap-3.5">
        <template
          v-for="tab, i in infoTabs"
          :key="tab"
        >
          <BaseTab
            :class="{
              '!hidden sm:(!block)': i === 2,
            }"
            :text="tab"
            variant="dark"
          />
        </template>
      </div>

      <div class="mb-24">
        <BaseText
          class="mb-2 max-w-232.5"
          heading="h1"
          text-color="white"
        >
          Стань разработчиком игр
          на Unreal Engine & Unity
        </BaseText>

        <BaseText text-color="white" variant="lg">
          Разработка 3D, 2D игр на платформе Unreal Engine и Unity
        </BaseText>
      </div>

      <BaseButton
        class="mt-auto sm:mt-0"
        variant="primary"
        @click="scrollToElement('send')"
      >
        <p class="text-base sm:text-[20px]">
          Записаться
        </p>
      </BaseButton>
    </div>

    <div class="flex flex-wrap mt-4 gap-4 sm:mt-16">
      <BaseTab
        v-for="tab in technologiesTabs"
        :key="tab"
        size="md"
        :text="tab"
        variant="light"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-block {
  @apply pb-10 md:pb-17.5;
  &__content {
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('./hero.png') no-repeat, lightgray -82px -369.39px / 105.959% 370.198% no-repeat ;
    background-size: cover;

    @apply rounded-3xl h-[553px] py-10 px-6 sm:(h-175) md:(py-[6.1875rem] px-20 rounded-[40px]) ;
  }
}
</style>
