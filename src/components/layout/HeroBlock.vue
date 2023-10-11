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
    <div class="hero-block__content">
      <div class="flex mb-10 gap-3.5">
        <BaseTab
          v-for="tab in infoTabs"
          :key="tab"
          :text="tab"
          variant="dark"
        />
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

      <BaseButton variant="primary">
        Записаться
      </BaseButton>
    </div>

    <div class="flex flex-wrap mt-16 gap-4">
      <BaseTab
        v-for="tab in technologiesTabs"
        :key="tab"
        :text="tab"
        variant="light"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-block {
  @apply pb-17.5;
  &__content {
    width: 100%;
    height: 700px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('../../assets/images/hero.png') no-repeat, lightgray -82px -369.39px / 105.959% 370.198% no-repeat ;
    background-size: cover;
    border-radius: 40px;
    @apply py-[6.1875rem] px-20;
  }
}
</style>
