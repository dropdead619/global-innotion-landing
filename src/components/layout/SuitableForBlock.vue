<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';

const breakpoints = {
  300: {
    itemsToShow: 1.2,
  },
  500: {
    itemsToShow: 1.2,
  },
  924: {
    itemsToShow: 1.5,
  },
  1124: {
    itemsToShow: 2,
  },
  1125: {
    itemsToShow: 3,
  },
};
</script>

<template>
  <div class="py-10 md:py-17.5">
    <BaseText class="mb-6 sm:(mb-10 mx-14) " heading="h2">
      Кому подойдет
    </BaseText>

    <!-- <div class="grid gap-4.75 grid-cols-1 justify-between lg:(grid-cols-3)">
      <BaseCard>
          <BaseText
            variant="lg"
            weight="medium"
          >
            Для тех, кто хочет создавать
            3D-модели
          </BaseText>
        </BaseCard>
      </div> -->

    <Carousel
      :breakpoints="breakpoints"
      :items-to-show="3"
      :pause-autoplay-on-hover="true"
      :transition="300"
      :wrap-around="true"
    >
      <Slide :index="1">
        <BaseCard class="h-full">
          <BaseText
            variant="lg"
            weight="medium"
          >
            Для тех, кто хочет создавать
            3D-модели
          </BaseText>
        </BaseCard>
      </Slide>

      <Slide :index="2">
        <BaseCard class="h-full">
          <BaseText
            variant="lg"
            weight="medium"
          >
            Для тех, кто обожает видеоигры и мечтает о карьере в индустрии разработки игр
          </BaseText>
        </BaseCard>
      </Slide>
      <Slide :index="3">
        <BaseCard class="h-full">
          <BaseText
            variant="lg"
            weight="medium"
          >
            Тем, кто любит видеоигры и
            хочет работать в геймдеве
          </BaseText>
        </BaseCard>
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss">
.carousel__slide {
  padding: 0 19px;
  height: 165px !important;
}
</style>
