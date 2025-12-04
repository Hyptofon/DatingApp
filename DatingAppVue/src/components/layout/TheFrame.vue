<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  isAuth: boolean
}>()

const frameClasses = computed(() => ({
  'frame--auth bg-primary': props.isAuth,
  'bg-white': !props.isAuth,
}))
</script>

<template>
  <div
    class="flex justify-center items-center h-full overflow-hidden fixed w-full top-0 left-0"
    :class="props.isAuth ? 'bg-primary' : 'bg-bg-main'"
  >
    <div
      class="frame w-[375px] h-[812px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col relative overflow-hidden max-[500px]:w-full max-[500px]:h-screen max-[500px]:rounded-none max-[500px]:shadow-none"
      :class="frameClasses"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.frame {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
