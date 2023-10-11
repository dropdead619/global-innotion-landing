<script setup lang="ts">
const programCards = ref([
  {
    id: 0,
    title: 'Unreal Engine C++ Game Developer',
    isOpen: false,
    price: '60 000тг/мес',
    tabs: [
      '12 уроков',
      '8 вебинаров',
      '8 практических работ',
      '1 проект',
    ],
    options: [
      'Введение в Unreal Engine',
      'Основы программирования на C++',
      'Работа с 3D графикой и ассетами',
      'Физика и взаимодействие в игре',
      'Интерфейс и взаимодействие с пользователем (UI/UX)',
      'Аудио, музыка и звуковые эффекты',
      'Использование Blueprints',
      'Многопользовательские функции и сетевая игра',
      'Оптимизация и дебаггинг',
      'Сборка и публикация игры',
    ],
  },
  {
    id: 1,
    title: 'Unity C# 2D Game Developer',
    isOpen: false,
    price: '40 000тг/мес',
    tabs: [
      '12 уроков',
      '8 вебинаров',
      '8 практических работ',
      '1 проект',
    ],
    options: [
      'Введение в Unity',
      'Основы программирования на C#',
      'Работа с 2D графикой',
      'Физика и интерактивность',
      'UI и UX в играх',
      'Аудио и эффекты',
      'Продвинутые темы',
      'Завершение проекта',
    ],
  },
]);

function toggleCardVisibility(idx: number) {
  programCards.value[idx].isOpen = !programCards.value[idx].isOpen;
}
</script>

<template>
  <div class="py-17.5">
    <BaseText class="mb-10" heading="h2">
      Программы курсов
    </BaseText>

    <div class="flex flex-col gap-5.5">
      <BaseCard
        v-for="card, i in programCards"
        :key="card.id"
        class="overflow-hidden"
      >
        <BaseText class="mb-6" variant="xl">
          {{ card.title }}
        </BaseText>

        <div
          class="flex flex-col  w-full gap-6 items-center lg:flex-row"
        >
          <div class="flex flex-wrap order-0 gap-4 ">
            <BaseTab
              v-for="tab in card.tabs"
              :key="tab"
              :text="tab"
              variant="gray"
            />
          </div>

          <div class="flex flex-1 w-full gap-3 items-center justify-between lg:w-fit">
            <UpIcon
              class="cursor-pointer order-3 transform transition transition-transform duration-500 lg:order-1"
              :class="{
                'rotate-180': card.isOpen,
              }"
              @click="toggleCardVisibility(i)"
            />

            <BaseText class="order-2" variant="xl">
              {{ card.price }}
            </BaseText>
          </div>
        </div>
        <div
          class="flex flex-col transition transition-all ease-in-out gap-4 duration-500 relative"
          :class="{
            'max-h-0 opacity-0': !card.isOpen,
            'max-h-400 mt-10 opacity-100': card.isOpen,
          }"
        >
          <div
            v-for="option, j in card.options"
            :key="option"
            class="border-border flex border-1 rounded-3xl py-6 px-10 gap-6 items-center"
          >
            <div class="bg-border rounded-full flex font-medium h-7 text-sm w-7 items-center justify-center">
              {{ j + 1 }}
            </div>
            <BaseText variant="lg" weight="medium">
              {{ option }}
            </BaseText>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 .extended {
      max-height: 700px !important;
      padding: 16px !important;
    }
.TelematicsControlPanel {
    transition: all 0.3s ease-in-out;
    background: rgba(28, 28, 28, 0.9);
    border-radius: 6px 6px 0px 0px;
    max-height: 0px;
}
</style>
