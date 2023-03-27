<script setup lang="ts">
import { ref } from 'vue'
import Chevron from './images/Chevron.vue'
const emit = defineEmits(['toDetail'])
const heading = ref('PORTFOLIO')
const portfolios = ref([
  {
    src: '/1.png',
    name: 'NAME',
    id: '1',
  },
  {
    src: '/2.png',
    name: 'NAME',
    id: '2',
  },
])
const generate = ref('THE GENERATE')
const effect = ref(-1)

const toDetail = (index: number) => {
  effect.value = index
  setTimeout(() => {
    emit('toDetail', index)
  }, 500)
}
</script>
<template>
  <div class="flex flex-col justify-center text-secondary my-20">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div v-for="(v, i) in portfolios">
      <div class="w-10/12 mt-20">
        <div
          class="rounded-3xl w-full h-0 p-0 bg-no-repeat bg-cover bg-center"
          style="padding-bottom: 50%"
          :style="{ backgroundImage: `url(${v.src})` }"
        ></div>
      </div>
      <div class="flex justify-end">
        <div class="-mt-36 rounded-3xl bg-secondary flex flex-col justify-between text-primary w-1/3 h-56 p-12">
          <p class="text-xl">{{ v.name }}</p>
          <div class="flex justify-between items-end">
            <p class="text-base">{{ generate }}</p>
            <div
              class="-mb-7 rounded-full w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-slate-400"
              :class="effect === i && 'animate-bigping'"
              @click="toDetail(i)"
            >
              <Chevron width="47" height="8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
