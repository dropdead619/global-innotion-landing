<script setup lang="ts"></script>

<template>
  <div class="bg-background flex mx-auto w-full py-4 px-8 z-10 items-center fixed">
    <div class="mr-41">
      <a href="">
        <LogoIcon />
      </a>
    </div>

    <div class="flex gap-20">
      <div class="p-2">
        <a href="#">
          <BaseText class="hover:(text-[#585858])" variant="md">
            о нас
          </BaseText>
        </a>
      </div>
      <div class="p-2">
        <a href="#">
          <BaseText class="hover:(text-[#585858])" variant="md">
            программа
          </BaseText>
        </a>
      </div>
      <div class="p-2">
        <a href="#">
          <BaseText class="hover:(text-[#585858])" variant="md">
            faq
          </BaseText>
        </a>
      </div>
    </div>

    <div class="ml-auto p-2 hidden md:block">
      <a href="#">
        <BaseText class="hover:(text-[#585858])" variant="md">
          записаться
        </BaseText>
      </a>
    </div>
  </div>
</template>
