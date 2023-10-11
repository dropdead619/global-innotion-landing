<script setup lang="ts">
const state = reactive({
  name: '',
  phone: '',
  email: '',
});
</script>

<template>
  <div class="py-17.5">
    <BaseText class="mb-10" heading="h2">
      О нас
    </BaseText>

    <div>
      <div class="flex flex-col gap-3">
        <BaseInput
          id="name"
          v-model="state.name"
          placeholder="ФИО"
        />
        <BaseInput
          id="phone"
          v-model="state.phone"
          placeholder="Номер телефона"
        />
        <BaseInput
          id="email"
          v-model="state.email"
          placeholder="Email"
        />
      </div>

      <BaseButton>
        Записаться на курс
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
