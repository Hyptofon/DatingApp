<template>
  <div class="header px-[30px] pt-[60px] pb-10 text-center relative z-10">
    <div class="logo-container mb-10 max-[360px]:mb-[30px]">
      <div class="heart-logo mx-auto mb-5 w-[60px] h-[60px]">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="white" />
          <path d="M30 45L27 42.3C19.4 35.36 15 31.28 15 26.5C15 22.42 18.42 19 22.5 19C24.74 19 26.91 20.02 28.5 21.72L30 23.44L31.5 21.72C33.09 20.02 35.26 19 37.5 19C41.58 19 45 22.42 45 26.5C45 31.28 40.6 35.36 33 42.3L30 45Z" fill="#FF5F5F" />
        </svg>
      </div>
      <h1 class="logo-text font-bomber text-[50px] font-black text-white tracking-[2.5px] max-[360px]:text-[44px]">
        FATED
      </h1>
    </div>
    <slot></slot>
  </div>
</template>
