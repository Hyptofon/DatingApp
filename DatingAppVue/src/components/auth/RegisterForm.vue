<script setup lang="ts">
import { reactive } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const emit = defineEmits<{
  (e: 'switch-to-login'): void
}>()

const registerData = reactive({ username: '', password: '', email: '' })

const handleSubmit = () => {
  console.log('Register Data:', registerData)
  alert(`Register submitted for: ${registerData.username}`)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="form flex flex-col gap-5 w-full px-[48px] max-[500px]:px-[10%] max-[360px]:px-[6%]"
  >
    <BaseInput v-model="registerData.username" placeholder="user name" />
    <BaseInput v-model="registerData.password" type="password" placeholder="password" />
    <BaseInput v-model="registerData.email" type="email" placeholder="email" />

    <a href="#" class="forgot-link text-white text-[10px] no-underline text-right -mt-[10px] hover:underline">FORGOT PASSWORD?</a>

    <BaseButton type="submit">REGISTER</BaseButton>

    <p class="bottom-text text-white text-[10px] text-center mt-[10px]">
      ALREADY HAVE AN ACCOUNT? <a href="#login" @click.prevent="$emit('switch-to-login')" class="text-white font-bold no-underline hover:underline">LOGIN</a>
    </p>
  </form>
</template>
