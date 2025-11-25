<script setup lang="ts">
import { reactive } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const emit = defineEmits<{
  (e: 'switch-to-register'): void
}>()

const loginData = reactive({ username: '', password: '' })

const handleSubmit = () => {
  console.log('Login Data:', loginData)
  alert(`Login submitted for: ${loginData.username}`)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="form flex flex-col gap-5 w-full px-[48px] max-[500px]:px-[10%] max-[360px]:px-[6%]"
  >
    <BaseInput v-model="loginData.username" placeholder="user name" />
    <BaseInput v-model="loginData.password" type="password" placeholder="password" />

    <a href="#" class="forgot-link text-white text-[10px] no-underline text-right -mt-[10px] hover:underline">FORGOT PASSWORD?</a>

    <BaseButton type="submit">LOGIN</BaseButton>

    <p class="bottom-text text-white text-[10px] text-center mt-[10px]">
      DON'T HAVE AN ACCOUNT? <a href="#register" @click.prevent="$emit('switch-to-register')" class="text-white font-bold no-underline hover:underline">REGISTER</a>
    </p>
  </form>
</template>
