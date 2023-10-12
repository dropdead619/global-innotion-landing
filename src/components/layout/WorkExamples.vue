<script setup lang="ts">
const webGames = 'web игры';
</script>

<template>
  <div class="py-10 md:py-17.5">
    <div class="grid gap-6 grid-cols-1 lg:(grid-cols-2)">
      <div class="flex flex-col gap-3 sm:gap-4">
        <BaseCard variant="dark">
          <BaseText
            class="mb-4 sm:font-medium"
            text-color="white"
            variant="xl"
          >
            Примеры работ которым научитесь
          </BaseText>

          <div class="flex gap-2 sm:gap-4">
            <BaseTab :text="webGames" variant="dark" />

            <BaseTab text="мобильные игры" variant="dark" />
          </div>
        </BaseCard>

        <BaseImage class="sm:(!h-full) !h-[290px]">
          <img alt="Picture 3" src="@/assets/images/pic_3.png">
        </BaseImage>
      </div>

      <div class="h-full">
        <BaseImage class="sm:(!h-full) !h-[290px]">
          <img alt="Picture 4" src="@/assets/images/pic_4.png">
        </BaseImage>
      </div>

      <div class="col-span-full">
        <BaseImage class="sm:(!h-full) !h-[290px]">
          <img alt="Picture 5" src="@/assets/images/pic_5.png">
        </BaseImage>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
