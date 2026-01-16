<script setup lang="ts">
import { ref } from "vue";
const heading = ref("ABOUT");
const text1 = ref("Be a picky user");
const text2 = ref("Before be a good developer");
const experience = ref([
  {
    title: "Frontend Enginner",
    startAt:"2024",
    endAt:"2025",
    company: "SmaDay Technology Co., Ltd",
  },
  {
    title: "Frontend Enginner",
    startAt:"2023",
    endAt:"2024",
    company: "Orange Create & Operation",
  },
  {
    title: "Frontend Enginner",
    startAt:"2021",
    endAt:"2023",
    company: "Dotech Inc",
  },
  {
    title: "PHP Engineer",
    startAt:"2019",
    endAt:"2021",
  },
  {
    title: "IT Manager",
    startAt:"2017",
    endAt:"2019",
  },
]);
</script>
<template>
  <div class="px-5 flex flex-col justify-center text-secondary my-20 lg:px-0">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div class="relative w-full h-60">
      <p class="absolute left-14 top-20 text-lg lg:text-2xl">{{ text1 }}</p>
      <p class="absolute right-20 top-40 text-lg lg:text-2xl lg:right-60">
        {{ text2 }}
      </p>
    </div>
    <img src="/man.webp" class="mx-auto mb-10" alt="" />
    <div v-for="v in experience" class="flex mb-5 lg:mx-20">
      <div
        class="w-20 h-20 rounded-full p-1 bg-third text-secondary flex justify-center items-center text-sm lg:text-lg lg:w-32 lg:h-32"
      >
        <p class="hidden lg:block">
          {{ v.startAt }} - {{ v.endAt }}
        </p>
         <p class="lg:hidden text-center">
          {{ v.endAt }}
          <span>
            |
          </span>
           {{ v.startAt }}
        </p>
      </div>
      <div
        class="rounded-3xl border-2 border-secondary text-secondary flex-1 flex justify-center items-center ml-5 lg:text-xl lg:ml-10"
      >
        <div class="lg:flex">
          <p class="text-center">
            {{ v.title }}
          </p>
          <span v-if="v.company" class="hidden lg:block"> &nbsp;|&nbsp; </span>
          <p v-if="v.company" class="text-center">
            {{ v.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
