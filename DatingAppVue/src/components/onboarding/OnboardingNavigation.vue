<script setup lang="ts">
defineProps<{
  currentStep: number
}>()

defineEmits<{
  (e: 'next'): void
  (e: 'go-to', step: number): void
}>()
</script>

<template>
  <div
    class="navigation flex justify-between items-center px-4 pb-10 max-[360px]:pb-5 max-[360px]:gap-[10px]"
  >
    <router-link
      to="/auth"
      class="btn-skip w-[70px] h-[30px] rounded-[5px] text-xs font-semibold tracking-widest no-underline flex items-center justify-center bg-bg-light text-text-main transition-all duration-300 hover:bg-bg-light-hover max-[360px]:w-[65px] max-[360px]:text-[11px]"
    >
      SKIP
    </router-link>

    <slot name="pagination"></slot>

    <button
      @click="$emit('next')"
      class="btn-next w-[70px] h-[30px] rounded-[5px] text-xs font-semibold tracking-widest no-underline flex items-center justify-center bg-primary text-white transition-all duration-300 hover:bg-primary-hover max-[360px]:w-[65px] max-[360px]:text-[11px]"
    >
      NEXT
    </button>
  </div>
</template>
