<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.replace('/')
}
const buttonText = ref('RETURN HOME')
</script>
<template>
  <div class="min-h-[calc(100vh-96px)] min-w-screen bg-primary flex flex-col justify-center items-center lg:flex-row">
    <img src="/404.png" alt="" />
    <div class="text-center lg:text-start">
      <p class="text-secondary mt-5 text-2xl lg:text-4xl lg:mt-0">Oops!Don't cry...</p>
      <p class="text-third text-[60px] lg:text-[200px]">404</p>
      <p class="text-secondary whitespace-nowrap text-2xl lg:text-5xl">PAGE NOT FOUND</p>
      <button class="bg-secondary text-third hover:text-secondary mt-10" @click="goHome">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<style scope lang="scss">
button {
  @apply rounded-lg w-52 h-16 text-xl;
  display: inline-block;
  background: linear-gradient(to left, $secondary-color 50%, $third-color 50%) right;
  background-size: 200%;
  transition: 0.4s ease-out;

  &:hover {
    background-position: left;
  }
}
</style>
