<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  images: Array<any>
  description: String
}>()
defineEmits<{
  (e: 'goto', block: string): void
}>()
const heading = ref('PORTFOLIO')
const images = ref(['/1.png', '/1.png', '/1.png', '/1.png', '/1.png'])
const description = ref('This is a description')
const goBack = ref('GO BACK')
const goExplore = ref('GO EXPLORE')
const hover = ref(null) as unknown
</script>
<template>
  <div class="flex flex-col justify-center text-secondary my-20 mx-5 lg:mx-0">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
      <div
        v-for="(v, i) in images"
        class="relative rounded-xl w-full h-0 p-0 bg-no-repeat bg-cover bg-center bg-opacity-50"
        style="padding-bottom: 60%"
        :style="{ backgroundImage: `url(${v})` }"
        @mouseover="hover = i"
        @mouseleave="hover = null"
      >
        <div
          v-show="hover === i"
          class="absolute inset-0 bg-slate-600 bg-opacity-80 text-2xl flex justify-center items-center cursor-pointer rounded-xl"
        >
          <font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center " />
        </div>
      </div>
    </div>
    <p class="text-center mt-24 text-xl">{{ description }}</p>
    <div class="flex justify-between items-center mt-20 lg:mx-40">
      <button class="mx-2 bg-third text-secondary hover:text-third" @click="$emit('goto', 'portfolio')">
        {{ goBack }}
      </button>
      <button class="mx-2 bg-secondary text-third hover:text-secondary">
        {{ goExplore }}
      </button>
    </div>
  </div>
</template>
<style scope lang="scss">
button {
  @apply rounded-lg w-52 h-16 text-xl;
  &:nth-child(1) {
    display: inline-block;
    background: linear-gradient(to left, $third-color 50%, $secondary-color 50%) right;
    background-size: 200%;
    transition: 0.4s ease-out;
  }
  &:nth-child(2) {
    display: inline-block;
    background: linear-gradient(to left, $secondary-color 50%, $third-color 50%) right;
    background-size: 200%;
    transition: 0.4s ease-out;
  }
  &:hover {
    background-position: left;
  }
}
</style>
