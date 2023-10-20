<script setup lang="ts">
const isExtended = ref(false);

const prevScrollPos = ref();

function scrollEventCb() {
  const currentScrollPos = window.scrollY;
  if (currentScrollPos < prevScrollPos.value)
    isExtended.value = false;
  else
    isExtended.value = true;

  prevScrollPos.value = currentScrollPos;
}

document.addEventListener('scroll', scrollEventCb);

onUnmounted(() => {
  document.removeEventListener('scroll', scrollEventCb);
});
</script>

<template>
  <header
    class="bg-background flex mx-auto w-full  py-2 px-4 transition transition-all ease-in-out z-10  duration-300 items-center fixed sm:(py-4 px-8) "
    :class="{
      'transform -translate-y-20': isExtended,
      'translate-y-0': !isExtended,
    }"
  >
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
  </header>
</template>
