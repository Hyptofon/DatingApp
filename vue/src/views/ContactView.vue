E:\DatingApp\vue\src\views\ContactView.vue
<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4 text-white">Сторінка контактів</h1>
    <p class="text-white">Це наша нова сторінка контактів!</p>

    <UserCard username="Student_1" :isActive="true" />
    <UserCard username="Student_2" :isActive="false" />
  </div>
</template>
