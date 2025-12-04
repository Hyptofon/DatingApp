<script setup lang="ts">
defineProps<{
  activeView: 'login' | 'register'
}>()

defineEmits<{
  (e: 'switch', target: 'login' | 'register'): void
}>()
</script>

<template>
  <div
    class="tab-buttons flex gap-5 relative mx-12 max-[500px]:mx-[10%] max-[360px]:mx-[6%] max-[360px]:gap-[10px] before:content-[''] before:absolute before:top-0 before:w-[calc(50%-10px)] before:h-[30px] before:rounded-[5px] before:bg-white before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(0.785,0.135,0.15,0.86)] max-[360px]:before:w-[calc(50%-5px)]"
    :class="{ 'register-active': activeView === 'register' }"
  >
    <a href="#login" @click.prevent="$emit('switch', 'login')"
       class="tab-btn w-[130px] h-[30px] rounded-[5px] text-xs font-black tracking-widest no-underline flex items-center justify-center z-[1] transition-colors duration-[400ms] ease-in-out hover:bg-transparent max-[360px]:text-[11px]"
       :class="activeView === 'login' ? 'text-primary bg-transparent' : 'text-white bg-white/10'">
      LOGIN
    </a>

    <a href="#register" @click.prevent="$emit('switch', 'register')"
       class="tab-btn w-[130px] h-[30px] rounded-[5px] text-xs font-black tracking-widest no-underline flex items-center justify-center z-[1] transition-colors duration-[400ms] ease-in-out hover:bg-transparent max-[360px]:text-[11px]"
       :class="activeView === 'register' ? 'text-primary bg-transparent' : 'text-white bg-white/10'">
      REGISTER
    </a>
  </div>
</template>

<style scoped>
.tab-buttons::before {
  transform: translateX(0);
}
.tab-buttons.register-active::before {
  transform: translateX(calc(100% + 20px));
}
@media (max-width: 360px) {
  .tab-buttons.register-active::before {
    transform: translateX(calc(100% + 10px));
  }
}
</style>
