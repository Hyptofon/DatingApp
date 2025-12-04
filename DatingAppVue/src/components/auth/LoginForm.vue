<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const emit = defineEmits<{
  (e: 'switch-to-register'): void
}>()

const validationSchema = toTypedSchema(
  z.object({
    username: z.string().min(1, { message: "Ім'я користувача обов'язкове" }),
    password: z.string().min(1, { message: "Пароль обов'язковий" })
  })
)

const { handleSubmit, errors, defineField } = useForm({
  validationSchema
})

const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values) => {
  console.group('Login Success')
  console.log('Дані:', values)
  console.groupEnd()

  alert(`Login submitted for: ${values.username}`)
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
      <span v-if="errors.password" class="text-yellow-300 font-medium text-[11px] text-right">
        {{ errors.password }}
      </span>
    </div>

    <a href="#" class="forgot-link text-white text-[10px] no-underline text-right -mt-[5px] hover:underline">FORGOT PASSWORD?</a>

    <BaseButton type="submit">LOGIN</BaseButton>

    <p class="bottom-text text-white text-[10px] text-center mt-[10px]">
      DON'T HAVE AN ACCOUNT? <a href="#register" @click.prevent="$emit('switch-to-register')" class="text-white font-bold no-underline hover:underline">REGISTER</a>
    </p>
  </form>
</template>
