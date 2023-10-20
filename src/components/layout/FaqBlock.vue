<script setup lang="ts">
const faqList = ref([
  {
    title: 'Сколько стоят курсы?',
    content: 'Оба курса стоят 40 000 тенге в месяц.',
    isOpen: false,
  },
  {
    title: 'Как долго длится каждый курс?',
    content: 'Курс "Unity 2D Game Developer" длится 3 месяца, а курс "Unreal Engine Game Developer" — 4 месяца.',
    isOpen: false,
  },
  {
    title: 'Какой формат обучения?',
    content: 'Оба курса проводятся в онлайн формате, присутствие обязательно.',
    isOpen: false,
  },
  {
    title: 'Есть ли сертификат по окончании?',
    content: 'Да, по окончании курса вы получите сертификат, подтверждающий вашу квалификацию.',
    isOpen: false,
  },
  {
    title: 'Какова система оценивания?',
    content: 'Оценка базируется на выполненных домашних заданиях и финальном проекте',
    isOpen: false,
  },
  {
    title: 'Какова цель курса "Unity 2D Game Developer"?',
    content: 'Цель курса — подготовить студентов к созданию 2D игр на платформе Unity.',
    isOpen: false,
  },
  {
    title: 'Какие навыки мне потребуются для начала обучения "Unity 2D Game Developer"?',
    content: 'Базовые навыки работы с компьютером. Предварительное знание программирования приветствуется, но не обязательно.',
    isOpen: false,
  },
  {
    title: 'Что я смогу делать после окончания курса "Unity 2D Game Developer"?',
    content: 'После окончания курса вы сможете разрабатывать и опубликовывать собственные 2D игры на различных платформах',
    isOpen: false,
  },
  {
    title: 'Какова цель курса "Unreal Engine Game Developer"?',
    content: 'Цель курса — дать студентам всеобъемлющие навыки и знания для разработки 3D игр на платформе Unreal Engine.',
    isOpen: false,
  },
  {
    title: 'Какие навыки мне потребуются для начала обучения "Unreal Engine Game Developer"?',
    content: 'Основы работы с компьютером и базовое понимание программирования на C++ будут полезными, но не обязательными',
    isOpen: false,
  },
  {
    title: 'Что я смогу делать после окончания курса "Unreal Engine Game Developer"?',
    content: 'Вы будете способны разрабатывать сложные 3D игры, включая многопользовательские и сетевые проекты, а также оптимизировать и публиковать их на различных платформах',
    isOpen: false,
  },
]);

function toggleCard(idx: number) {
  faqList.value[idx].isOpen = !faqList.value[idx].isOpen;
}
</script>

<template>
  <div id="faq" class="py-10 md:py-17.5">
    <div class="mb-8">
      <BaseText class="mb-6 sm:(mb-10 mx-14) " heading="h2">
        FAQ
      </BaseText>
      <BaseText
        class="mb-10"
        variant="lg"
        weight="medium"
      >
        Если у вас есть другие вопросы, не стесняйтесь <a class="text-[#0075FF]" href="#footer">связаться</a> с нами!
      </BaseText>
    </div>

    <div class="flex flex-col gap-2">
      <BaseCard
        v-for="faq, i in faqList"
        :key="faq.title"
        class="flex flex-col overflow-hidden"
        size="xxs"
        @click="toggleCard(i)"
      >
        <div class="flex justify-between">
          <p
            class="font-medium text-base leading-7"
          >
            {{ faq.title }}
          </p>

          <div class="h-6 w-6">
            <CloseIcon
              v-if="faq.isOpen"
              class="cursor-pointer"
            />
            <AddIcon
              v-else
              class="cursor-pointer"
            />
          </div>
        </div>

        <p
          class="text-sm transition transition-all ease-in-out duration-500"
          :class="{
            'max-h-0 opacity-0': !faq.isOpen,
            'max-h-100 mt-4 opacity-100 sm:mt-6': faq.isOpen,
          }"
        >
          {{ faq.content }}
        </p>
      </BaseCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
