<script setup lang="ts">
defineProps<{
  username: string,
  isActive: boolean
}>()
</script>

<template>
  <div
    class="border p-4 mt-3 rounded-lg shadow-sm"
    :class="isActive
      ? 'border-green-500 bg-green-50 dark:bg-green-900 dark:border-green-700'
      : 'border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600'"

  >
    <h3 class="font-semibold text-lg dark: text-black">{{ username }}</h3>

    <p
      class="text-sm"
      :class="isActive ? 'text-green-700' : 'text-gray-500'"
    >
      Статус: {{ isActive ? 'Онлайн' : 'Офлайн' }}
    </p>
  </div>
</template>
