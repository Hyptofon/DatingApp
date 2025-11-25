<script setup lang="ts">
defineProps<{
  image: string
  alt: string
  description: string
}>()
</script>

<template>
  <div
    class="content flex-1 flex flex-col items-center px-[30px] pt-[80px] pb-[30px] overflow-y-auto max-[500px]:px-[8%] max-[500px]:pt-[80px] max-[500px]:pb-[30px] max-[360px]:pt-[40px] max-[360px]:pb-[20px] max-[360px]:px-[6%]"
  >
    <img
      :src="image"
      :alt="alt"
      class="illustration w-[280px] h-auto mb-10 max-[500px]:w-full max-[500px]:max-w-[280px] max-[360px]:mb-[30px]"
    />

    <div
      class="title-box bg-primary text-white font-bold text-xl tracking-wider py-[13px] px-[15px] rounded-[5px] mb-[30px] text-center max-[360px]:text-lg max-[360px]:mb-5"
    >
      MEET NEW PEOPLE
    </div>

    <p
      class="description text-[10px] leading-[14px] text-text-light text-center max-w-[300px] max-[500px]:max-w-full"
    >
      {{ description }}
    </p>
  </div>
</template>
