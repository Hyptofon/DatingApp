<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-4xl mx-auto">
      <nav class="
        p-4
        bg-gray-100 dark:bg-gray-900
        rounded-b-lg
        shadow-md dark:shadow-lg
        flex space-x-4
      ">
        <RouterLink
          to="/"
          class="
            text-blue-600 hover:text-blue-800
            dark:text-blue-400 dark:hover:text-blue-300
            transition duration-150 ease-in-out
          "
        >
          Home
        </RouterLink>

        <RouterLink
          to="/about"
          class="
            text-blue-600 hover:text-blue-800
            dark:text-blue-400 dark:hover:text-blue-300
            transition duration-150 ease-in-out
          "
        >
          About
        </RouterLink>

        <RouterLink
          to="/contact"
          class="
            text-blue-600 hover:text-blue-800
            dark:text-blue-400 dark:hover:text-blue-300
            transition duration-150 ease-in-out
          "
        >
          Contact
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto mt-5">
    <RouterView />
  </main>
</template>
