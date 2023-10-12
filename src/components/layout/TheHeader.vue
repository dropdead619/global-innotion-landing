<script setup lang="ts">
</script>

<template>
  <div class="bg-background flex mx-auto w-full py-2 px-4  z-10 items-center fixed sm:(py-4 px-8) ">
    <div class="mr-8 sm:mr-10 md:mr-41">
      <a href="">
        <LogoIcon />
      </a>
    </div>

    <div class="flex gap-4 sm:gap-20">
      <div class="p-2">
        <a class="cursor-pointer" @click="scrollToElement('about')">
          <BaseText class="hover:(text-[#585858])" variant="md">
            о нас
          </BaseText>
        </a>
      </div>
      <div class="p-2">
        <a class="cursor-pointer" @click="scrollToElement('program')">
          <BaseText class="hover:(text-[#585858])" variant="md">
            программа
          </BaseText>
        </a>
      </div>
      <div class="p-2">
        <a class="cursor-pointer" @click="scrollToElement('faq')">
          <BaseText class="hover:(text-[#585858])" variant="md">
            faq
          </BaseText>
        </a>
      </div>
    </div>

    <div class="ml-auto p-2 hidden md:block">
      <a class="cursor-pointer" @click="scrollToElement('send')">
        <BaseText class="hover:(text-[#585858])" variant="md">
          записаться
        </BaseText>
      </a>
    </div>
  </div>
</template>
