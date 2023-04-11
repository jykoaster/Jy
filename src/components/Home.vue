<script setup lang="ts">
import { ref } from 'vue'
const name = ref('JEREMY XIAO')
const job = ref('FRONT-END ENGINEER')
const Email = ref('YM31215@GMAIL.COM')
const icons = ref([
  {
    icon: 'fa-brands fa-npm',
    name: 'npm',
  },
  {
    icon: 'fa-brands fa-github',
    name: 'github',
  },
])
</script>
<template>
  <div class="px-5 lg:px-0 lg:flex lg:flex-col lg:justify-center lg:min-h-[calc(100vh-96px)]">
    <div class="flex flex-col justify-between relative lg:flex-row">
      <img src="/NB_m.webp" class="lg:hidden w-full" alt="NB_m" />
      <div>
        <img src="/logo.webp" class="hidden lg:block" alt="logo" />
        <div class="border-2 border-white rounded-3xl text-secondary text-center text-xl p-10 mt-10 lg:text-3xl">
          <p class="text-3xl lg:text-4xl mb-5">{{ name }}</p>
          <p class="mb-5 whitespace-nowrap">{{ job }}</p>
          <p class="whitespace-nowrap">{{ Email }}</p>
          <p></p>
        </div>
      </div>
      <div class="hidden lg:block">
        <img src="/NB.webp" class="w-full" alt="NB" />
      </div>
    </div>
    <div class="hidden lg:block absolute bottom-10 right-24">
      <div
        v-for="v in icons"
        class="rounded-full bg-third h-14 w-14 mb-12 flex justify-center items-center cursor-pointer hover:animate-heartbeat"
      >
        <font-awesome-icon :icon="v.icon" class="h-8 w-8 text-secondary" />
      </div>
    </div>
  </div>
</template>
