<script setup lang="ts">
const webGames = 'web игры';
</script>

<template>
  <div class="py-10 md:py-17.5">
    <div class="grid gap-6 grid-cols-1 lg:(grid-cols-2)">
      <div class="flex flex-col gap-3 sm:gap-4">
        <BaseCard variant="dark">
          <p
            class="text-white mb-4 text-[20px] leading-[28px] sm:(text-[32px] leading-10) "
            text-color="white"
            variant="xl"
          >
            Примеры работ которым научитесь
          </p>

          <div class="flex gap-2 sm:gap-4">
            <BaseTab
              class="border-1 border-[#333333] !bg-transparent !py-[9px]"
              :text="webGames"
              variant="dark"
            />

            <BaseTab
              class="border-1 border-[#333333] !bg-transparent !py-[9px]"
              text="мобильные игры"
              variant="dark"
            />
          </div>
        </BaseCard>

        <BaseImage class="sm:(!h-full) !h-[290px]">
          <NuxtImg alt="Picture 3" src="/pic_3.png" />
        </BaseImage>
      </div>

      <div class="h-full">
        <BaseImage class="sm:(!h-full) !h-[290px]">
          <NuxtImg alt="Picture 4" src="/pic_4.png" />
        </BaseImage>
      </div>

      <div class="col-span-full">
        <BaseImage class="sm:(!h-full) !h-[290px]">
          <NuxtImg alt="Picture 5" src="/pic_5.png" />
        </BaseImage>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
