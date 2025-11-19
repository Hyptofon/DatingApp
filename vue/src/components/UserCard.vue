<script setup lang="ts">
// TypeScript "на льоту" визначає тип пропсів
// Тепер VUE буде очікувати, що 'username' - це ЗАВЖДИ рядок
// а 'isActive' - ЗАВЖДИ булеве значення.
defineProps<{
  username: string,
  isActive: boolean
}>()
</script>

<template>
  <div class="user-card" :class="{ active: isActive }">
    <h3>{{ username }}</h3>
    <p>Статус: {{ isActive ? 'Онлайн' : 'Офлайн' }}</p>
  </div>
</template>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
}
.user-card.active {
  border-color: green;
  background-color: #e0ffe0;
}
</style>
