<script setup lang="ts">
import { ref } from 'vue'
const heading = ref('ABOUT')
const text1 = ref('A simple text example')
const experience = ref([
  {
    time: '2018~2022',
    company: 'Some company',
  },
  {
    time: '2018~2022',
    company: 'Some company',
  },
  {
    time: '2018~2022',
    company: 'Some company',
  },
])
</script>
<template>
  <div class="px-5 flex flex-col justify-center text-secondary my-20 lg:px-0">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div class="relative w-full h-60">
      <p class="absolute left-14 top-20">{{ text1 }}</p>
      <p class="absolute right-20 top-40 lg:right-60">{{ text1 }}</p>
    </div>
    <img src="/man.webp" class="mx-auto mb-10" alt="" />
    <div v-for="v in experience" class="flex mb-5 lg:mx-20">
      <div class="w-20 h-20 rounded-full bg-third text-secondary flex justify-center items-center lg:w-32 lg:h-32">
        {{ v.time }}
      </div>
      <div
        class="rounded-3xl border-2 border-secondary text-secondary flex-1 flex justify-center items-center ml-5 lg:ml-10"
      >
        {{ v.company }}
      </div>
    </div>
  </div>
</template>
