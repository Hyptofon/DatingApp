<script setup lang="ts">
defineProps<{
  currentStep: number
  totalSteps: number
}>()

defineEmits<{
  (e: 'go-to', step: number): void
}>()
</script>

<template>
  <div class="pagination flex gap-5 max-[360px]:gap-[15px]">
    <span
      v-for="i in totalSteps"
      :key="i"
      class="dot w-[10px] h-[10px] bg-bg-light rounded-[1px] transition-all duration-300 cursor-pointer"
      :class="{ '!bg-primary': i === currentStep }"
      @click="$emit('go-to', i)"
    >
    </span>
  </div>
</template>
