<script setup lang="ts">
import type * as SweetAlert2 from 'sweetalert2';

const state = reactive({
  name: '',
  phone: '',
  email: '',
  isSubmitted: false,
  isLoading: false,
  errors: {
    name: '',
    phone: '',
    email: '',
  },
});

const { $swal }: { $swal: typeof SweetAlert2.default } = useNuxtApp() as any;

function validate() {
  if (!state.email)
    state.errors.email = 'Поле "Email" обязательно';

  if (!state.name)
    state.errors.name = 'Поле "Имя" обязательно';

  if (!state.phone)
    state.errors.phone = 'Поле "Номер телефона" обязательно';

  return !state.errors.email && !state.errors.name && !state.errors.phone;
}

async function sendForm() {
  state.errors = {
    name: '',
    phone: '',
    email: '',
  };
  if (validate()) {
    state.isLoading = true;
    try {
      await $fetch('https://email.euphoria.games/api/email/', {
        method: 'post',
        headers: [
          ['Content-Type', 'application/json'],
        ],
        body: {
          subject: `giacademy: Новая заявка от ${state.name} ${state.email}`,
          receiver: 'euphoriawallet@gmail.com',
          html_text: `<p><strong>Имя:</strong> ${state.name}</p>
                      <p><strong>Номер телефона:</strong> ${state.phone}</p>
                      <p><strong>Email:</strong> ${state.email}</p>`,
        },
      });

      state.isSubmitted = true;
      $swal.fire({
        title: 'Заявка отправлена',
        icon: 'success',
        iconColor: 'white',
        color: 'white',
        background: '#000000',
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 4500,
      });
      state.errors = {
        name: '',
        phone: '',
        email: '',
      };
    } catch (err) {
      console.log(err);
    } finally {
      state.isLoading = false;
    }
  }
}
</script>

<template>
  <div id="send" class="py-10 course-form md:py-17.5">
    <div class="course-form__wrapper">
      <BaseText
        class="max-w-100 sm:font-medium xl:max-w-137.5"
        text-color="white"
        variant="1xl"
      >
        Успейте записаться на курс заполнив анкету
      </BaseText>

      <div class="w-full lg:max-w-107.5">
        <div class="flex flex-col mb-10 w-full gap-3">
          <BaseInput
            id="name"
            v-model="state.name"
            class="w-full"
            :error="state.errors.name"
            placeholder="ФИО"
          />
          <BaseInput
            id="phone"
            v-model="state.phone"
            v-maska="'+7 (###) ### ## ##'"
            :error="state.errors.phone"
            placeholder="Номер телефона"
          />
          <BaseInput
            id="email"
            v-model="state.email"
            :error="state.errors.email"
            placeholder="Email"
          />
        </div>
        <BaseButton
          v-if="!state.isSubmitted"
          class="w-full !rounded-2xl"
          :disabled="isLoading"
          @click="sendForm"
        >
          <p v-if="!state.isLoading" class="text-base sm:text-[20px]">
            Записаться на курс
          </p>
          <LoadingIcon v-else class="mx-auto transform transition transition-all animate-spin " />
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
    @apply flex flex-col rounded-4xl py-8 px-6 gap-14 justify-between sm:(py-10 px-30) lg:flex-row ;
  }
}
</style>
