<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Тут будуть стилі з main.css та index.css */
/* Tailwind classes should handle most styling */

/* Якщо ви хочете використовувати Vue Transition, розкоментуйте <Transition> та додайте стилі */
/* .slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
} */
</style>
