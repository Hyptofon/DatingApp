<script setup lang="ts">
// 1. Імпортуємо компонент
import UserCard from '@/components/UserCard.vue';
</script>

<template>
  <div class="contact-page">
    <h1>Сторінка контактів</h1>
    <p>Це наша нова сторінка контактів!</p>

    <UserCard username="Student_1" :isActive="true" />
    <UserCard username="Student_2" :isActive="false" />

    <!-- <UserCard username="Student_Error" :isActive="100" /> -->
    <!--Vue: Type 'number' is not assignable to type 'boolean'. -->

  </div>
</template>

<style scoped>
.contact-page {
  padding: 20px;
}
</style>
