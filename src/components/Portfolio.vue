<script setup lang="ts">
import { ref } from 'vue'
import Chevron from '@/components/images/Chevron.vue'
const emit = defineEmits<{
  (e: 'toDetail', data: any): void
}>()
const heading = ref('PORTFOLIO')
const portfolios = ref([
  {
    src: '/portfolio/shangxiang/1.PNG',
    images: [
      '/portfolio/shangxiang/1.PNG',
      '/portfolio/shangxiang/2.PNG',
      '/portfolio/shangxiang/3.PNG',
      '/portfolio/shangxiang/4.PNG',
    ],
    name: '尚享空間',
    descriptions: '使用Nuxt.js開發的CMS系統',
    id: '1',
  },
  {
    src: '/port2.webp',
    name: 'NAME',
    id: '2',
  },
])

const generate = ref('THE GENERATE')
const effect = ref('')

const toDetail = (index: string) => {
  effect.value = index
  setTimeout(() => {
    emit(
      'toDetail',
      portfolios.value.find((el) => el.id === index)
    )
  }, 500)
}
</script>
<template>
  <div class="flex flex-col justify-center text-secondary my-20 px-5 lg:px-0">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div v-for="(v, i) in portfolios">
      <div class="mt-20 lg:w-10/12">
        <div
          class="rounded-3xl w-full h-0 p-0 bg-no-repeat bg-cover bg-center"
          style="padding-bottom: 50%"
          :style="{ backgroundImage: `url(${v.src})` }"
        ></div>
      </div>
      <div class="flex justify-end">
        <div
          class="border border-slate-300 -mt-10 w-3/4 p-5 rounded-3xl bg-secondary flex flex-col justify-between text-primary lg:mx-0 lg:-mt-36 lg:w-1/3 lg:h-56 lg:p-12"
        >
          <p class="text-xl">{{ v.name }}</p>
          <div class="flex justify-between items-end">
            <p class="text-base">{{ generate }}</p>
            <div
              class="-mb-7 rounded-full w-20 h-20 flex justify-center items-center cursor-pointer hover:bg-slate-400"
              :class="effect === v.id && 'animate-bigping'"
              @click="toDetail(v.id)"
            >
              <Chevron width="47" height="8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
