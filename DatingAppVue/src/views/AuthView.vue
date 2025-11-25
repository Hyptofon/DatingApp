<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TheFrame from '@/components/layout/TheFrame.vue'
import AuthHeader from '@/components/auth/AuthHeader.vue'
import AuthTabs from '@/components/auth/AuthTabs.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const route = useRoute()
const router = useRouter()
const activeView = ref<'login' | 'register'>('login')

const switchView = (target: 'login' | 'register') => {
  activeView.value = target
  router.replace({ hash: `#${target}` })
}

onMounted(() => {
  if (route.hash === '#register') activeView.value = 'register'
})

watch(() => route.hash, (newHash) => {
  const target = newHash === '#register' ? 'register' : 'login'
  if (activeView.value !== target) activeView.value = target
})
</script>

<template>
  <TheFrame :is-auth="true">
    <AuthHeader>
      <AuthTabs :active-view="activeView" @switch="switchView" />
    </AuthHeader>

    <div class="form-container relative w-full min-h-[320px]">
      <Transition name="form-fade">
        <LoginForm
          v-if="activeView === 'login'"
          key="login"
          @switch-to-register="switchView('register')"
        />
        <RegisterForm
          v-else
          key="register"
          @switch-to-login="switchView('login')"
        />
      </Transition>
    </div>
  </TheFrame>
</template>
