<script setup lang="ts">
</script>

<template>
  <div id="about" class="py-10 md:py-17.5">
    <BaseText class="mb-6 sm:mb-10" heading="h2">
      О нас
    </BaseText>

    <div class="grid gap-4.75 grid-cols-1 justify-between lg:(grid-cols-12)">
      <BaseCard class="col-span-12 lg:col-span-8" size="xs">
        <BaseText
          class="mb-3"
          heading="h3"
        >
          Global Innotion
        </BaseText>

        <BaseText
          class="mb-10 xl:(mb-55)"
          variant="sm"
        >
          Мы специализируемся на создании проектов на заказ под ключ.
          Наши специалисты также консультируют по поводу интеграции
          блокчейн технологий в уже существующие продукты и бизнес процессы.
        </BaseText>
        <BaseText
          variant="sm"
        >
          Команда из более чем 15 экспертов. Более 6 лет опыта. Вели 10+ успешных проектов
        </BaseText>
      </BaseCard>
      <BaseCard class="h-[200px] col-span-12 sm:h-full lg:col-span-4" variant="dark">
        <div class="flex h-full w-full items-center justify-center">
          <img alt="Global innotion" src="@/assets/images/global_innotion.png">
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
