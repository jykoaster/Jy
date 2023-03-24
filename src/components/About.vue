<script setup lang="ts">
import Person from "./images/Person.vue";
import { ref } from "vue";
const heading = ref("ABOUT");
const text1 = ref("A simple text example");
const experience = ref([
  {
    time: "2018~2022",
    company: "Some company",
  },
  {
    time: "2018~2022",
    company: "Some company",
  },
  {
    time: "2018~2022",
    company: "Some company",
  },
]);
</script>
<template>
  <div class="flex flex-col justify-center text-secondary my-20">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div class="relative w-full h-60">
      <p class="absolute left-14 top-20">{{ text1 }}</p>
      <p class="absolute right-60 top-40">{{ text1 }}</p>
    </div>
    <Person width="972" height="421" class="mx-auto mb-10" />
    <div v-for="v in experience" class="flex mb-5 mx-20">
      <div
        class="rounded-full bg-third text-secondary w-32 h-32 flex justify-center items-center"
      >
        {{ v.time }}
      </div>
      <div
        class="rounded-3xl border border-secondary text-secondary flex-1 ml-10 flex justify-center items-center"
      >
        {{ v.company }}
      </div>
    </div>
  </div>
</template>
