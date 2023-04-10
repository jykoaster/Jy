<script setup lang="ts">
import { ref } from 'vue'
const name = ref('JEREMY XIAO')
const job = ref('FRONT-END ENGINEER')
const Email = ref('ym31215@gmail.com')
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
  <div class="px-5 lg:px-0 lg:min-h-screen">
    <div class="flex flex-col justify-between relative lg:flex-row">
      <img src="/NB_m.png" class="lg:hidden w-full" alt="" />
      <div>
        <img src="/logo.png" class="hidden lg:block" alt="" />
        <div class="border-2 border-white rounded-3xl text-secondary text-2xl p-10 mt-10 lg:text-4xl">
          <p class="text-3xl lg:text-4xl mb-5 lg:text-center">{{ name }}</p>
          <p class="mb-5">{{ job }}</p>
          <P>EMAIL:</P>
          <p>{{ Email }}</p>
        </div>
      </div>
      <div class="hidden lg:block">
        <img src="/NB.png" class="w-full" alt="" />
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
