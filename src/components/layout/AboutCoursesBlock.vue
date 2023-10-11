<script setup lang="ts">
</script>

<template>
  <div class="py-17.5">
    <BaseText class="mb-10" heading="h2">
      О курсах
    </BaseText>

    <div class="grid gap-6 grid-cols-12">
      <BaseCard class="col-span-12 lg:(col-span-6)">
        <BaseText class="mb-4" heading="h3">
          Unreal Engine C++ Game Developer
        </BaseText>

        <BaseText
          variant="sm"
          weight="normal"
        >
          Курс предлагает об comprehensive подход к разработке 3D игр на платформе Unreal Engine.
          Он подходит как для начинающих, так и для тех, кто уже имеет опыт в сфере разработки игр.
          Курс затрагивает широкий спектр тем, начиная от основ программирования на C++ и вплоть до
          продвинутых тем, таких как многопользовательские функции и сетевая игра. Курс позволяет не
          просто овладеть инструментами разработки, но и научиться оптимизации и публикации проектов.
        </BaseText>
      </BaseCard>

      <BaseImage class="col-span-12 lg:(col-span-6)">
        <img alt="Picture 1" src="@/assets/images/pic_1.png">
      </BaseImage>

      <BaseImage class="order-5 col-span-12 lg:(col-span-6 order-3) ">
        <img alt="Picture 2" src="@/assets/images/pic_2.png">
      </BaseImage>

      <BaseCard class="col-span-12 lg:(col-span-6)">
        <BaseText class="mb-4" heading="h3">
          Unity C# 2D Game Developer
        </BaseText>

        <BaseText
          variant="sm"
          weight="normal"
        >
          Этот курс предназначен для начинающих разработчиков, желающих овладеть
          навыками создания 2D игр на платформе Unity. Курс охватывает все от основ
          программирования на C# до конкретных аспектов работы с 2D графикой, физикой и
          интерфейсом. По окончании курса у студентов будет полное понимание процесса создания
          2D игр и у них будет возможность создать собственный проект.
        </BaseText>
      </BaseCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
