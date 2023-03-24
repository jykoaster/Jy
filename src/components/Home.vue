<script setup lang="ts">
import Logo from './images/Logo.vue'
import Computer from './images/Computer.vue'
import { ref } from 'vue'
const name = ref('JEREMY XIAO')
const job = ref('FRONT-END ENGINEER')
const Email = ref('EMAIL:')
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
  <div class="flex justify-between lg:min-h-screen relative">
    <div>
      <Logo width="472" height="380" />
      <div class="border-2 border-white rounded-3xl text-secondary text-4xl p-10">
        <p class="text-center mb-5">{{ name }}</p>
        <p class="mb-5">{{ job }}</p>
        <p>{{ Email }}</p>
      </div>
    </div>
    <div>
      <Computer width="727" height="773" />
    </div>
  </div>
  <div class="absolute bottom-10 right-24">
    <div
      v-for="v in icons"
      class="rounded-full bg-third h-14 w-14 mb-12 flex justify-center items-center cursor-pointer hover:animate-heartbeat"
    >
      <font-awesome-icon :icon="v.icon" class="h-8 w-8 text-secondary" />
    </div>
  </div>
</template>
