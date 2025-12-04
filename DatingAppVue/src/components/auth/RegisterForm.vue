<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { STRONG_PASSWORD_REGEX } from '@/utils/regex'


const emit = defineEmits<{
  (e: 'switch-to-login'): void
}>()

const validationSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(3, { message: "Ім'я має містити мінімум 3 символи" }),
    email: z
      .string()
      .min(1, { message: "Email обов'язковий" })
      .email({ message: "Некоректний формат email" }),
    password: z
      .string()
      .min(8, { message: "Пароль має бути не менше 8 символів" })
      .regex(STRONG_PASSWORD_REGEX, {
        message: "Потрібна велика літера, цифра та спецсимвол (!@#$)"
      })
  })
)
const { handleSubmit, errors, defineField } = useForm({
  validationSchema
})

const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')
const [email, emailAttrs] = defineField('email')

const onSubmit = handleSubmit((values) => {
  console.group('Register Success')
  console.log('Дані:', values)
  console.groupEnd()

  alert(`Register submitted for: ${values.username}`)
})
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="form flex flex-col gap-5 w-full px-[48px] max-[500px]:px-[10%] max-[360px]:px-[6%]"
  >
    <div class="flex flex-col gap-1">
      <BaseInput
        v-model="username"
        v-bind="usernameAttrs"
        placeholder="user name"
      />
      <span v-if="errors.username" class="text-yellow-300 font-medium text-[11px] text-right">
        {{ errors.username }}
      </span>
    </div>

    <div class="flex flex-col gap-1">
      <BaseInput
        v-model="password"
        v-bind="passwordAttrs"
        type="password"
        placeholder="password"
      />
      <span v-if="errors.password" class="text-yellow-300 font-medium text-[11px] text-right leading-tight">
        {{ errors.password }}
      </span>
    </div>

    <div class="flex flex-col gap-1">
      <BaseInput
        v-model="email"
        v-bind="emailAttrs"
        type="email"
        placeholder="email"
      />
      <span v-if="errors.email" class="text-yellow-300 font-medium text-[11px] text-right">
        {{ errors.email }}
      </span>
    </div>

    <a href="#" class="forgot-link text-white text-[10px] no-underline text-right -mt-[5px] hover:underline">FORGOT PASSWORD?</a>

    <BaseButton type="submit">REGISTER</BaseButton>

    <p class="bottom-text text-white text-[10px] text-center mt-[10px]">
      ALREADY HAVE AN ACCOUNT? <a href="#login" @click.prevent="$emit('switch-to-login')" class="text-white font-bold no-underline hover:underline">LOGIN</a>
    </p>
  </form>
</template>
