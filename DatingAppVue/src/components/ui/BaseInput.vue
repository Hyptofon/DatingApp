<script setup lang="ts">
defineProps<{
  modelValue?: string
  type?: string
  placeholder?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    :type="type || 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="w-full h-auto bg-white border-none rounded-[5px] p-4 text-[15px] tracking-[1.5px] text-text-main outline-none placeholder:text-text-main font-lato"
  />
</template>
