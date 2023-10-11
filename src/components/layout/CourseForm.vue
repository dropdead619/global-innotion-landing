<script setup lang="ts">
// https://rmwqxjmtpyhyfllgirnd.supabase.co/functions/v1/resend
const state = reactive({
  name: '',
  phone: '',
  email: '',
  isSubmitted: false,
});

async function sendForm() {
  try {
    const response = await useFetch('https://rmwqxjmtpyhyfllgirnd.supabase.co/functions/v1/resend', {
      method: 'post',
      headers: [
        ['Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd3F4am10cHloeWZsbGdpcm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNTA1MzksImV4cCI6MjAxMjYyNjUzOX0.PVhxB-yQ8A-0F_mG-bHGBmWUJSpG2XWnZMqw9zEhuLo'],
        ['Content-Type', 'application/json'],
      ],
      body: {
        from: `${state.name} - <${state.email}>`,
        subject: `Новая заявка от ${state.name}`,
        to: ['sacrifice619@gmail.com'],
        html: `<p>Name: ${state.name}</p> <br/> Phone: ${state.phone} <br/> Email: ${state.email}`,
      },
    });

    response.execute();

    state.isSubmitted = true;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div class="py-17.5 course-form">
    <div class="course-form__wrapper">
      <BaseText
        class="max-w-100 xl:max-w-137.5"
        text-color="white"
        variant="1xl"
        weight="medium"
      >
        Успейте записаться на курс заполнив анкету
      </BaseText>

      <div class="w-full lg:max-w-107.5">
        <div class="flex flex-col mb-10 w-full gap-3">
          <BaseInput
            id="name"
            v-model="state.name"
            class="w-full"
            placeholder="ФИО"
          />
          <BaseInput
            id="phone"
            v-model="state.phone"
            v-maska="'+7 (###) ### ## ##'"
            placeholder="Номер телефона"
          />
          <BaseInput
            id="email"
            v-model="state.email"
            placeholder="Email"
          />
        </div>

        <BaseButton class="w-full !rounded-2xl" @click="sendForm">
          Записаться на курс
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-form {
  &__wrapper {
    background: url('../../assets/images/form_bg.png') no-repeat, lightgray 0px -351.253px / 118.968% 239.376% no-repeat;
    background-size: cover;
    @apply flex flex-col rounded-4xl py-10 px-30 gap-14 justify-between lg:flex-row;
  }
}
</style>
