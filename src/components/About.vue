<script setup lang="ts">
import { ref } from "vue";
const heading = ref("ABOUT");
const text1 = ref("Be a picky user");
const text2 = ref("Before be a good developer");
const experience = ref([
  {
    time: "2024 ~ now",
    company: "今網智慧科技股份有限公司",
  },
  {
    time: "2023 ~ 2024",
    company: "橙設科技有限公司",
  },
  {
    time: "2021 ~ 2023",
    company: "達鈦科技實業有限公司",
  },
  {
    time: "2019 ~ 2021",
    company: "夸克有限公司",
  },
  {
    time: "2017 ~ 2019",
    company: "亞碼數位科技有限公司",
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
        class="w-20 h-20 rounded-full bg-third text-secondary flex justify-center items-center text-sm lg:text-lg lg:w-32 lg:h-32"
      >
        {{ v.time }}
      </div>
      <div
        class="rounded-3xl border-2 border-secondary text-secondary flex-1 flex justify-center items-center ml-5 lg:text-xl lg:ml-10"
      >
        {{ v.company }}
      </div>
    </div>
  </div>
</template>
