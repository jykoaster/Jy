<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

defineEmits<{
  (e: "goto", block: string): void;
}>();

const projects = [
  {
    id: "1",
    name: "ShangXiang",
    images: [
      "/portfolio/shangxiang/1.PNG",
      "/portfolio/shangxiang/2.PNG",
      "/portfolio/shangxiang/3.PNG",
      "/portfolio/shangxiang/4.PNG",
    ],
    descriptions:
      "CMS by Nuxt.js/tailwind.css. <br/>Page module , News module.",
    url: "https://sunshinespace.com.tw/zh-Hant",
  },
  {
    id: "2",
    name: "Ordering system",
    images: [
      "/portfolio/ordering/1.PNG",
      "/portfolio/ordering/2.PNG",
      "/portfolio/ordering/3.PNG",
      "/portfolio/ordering/4.PNG",
      "/portfolio/ordering/5.PNG",
      "/portfolio/ordering/6.PNG",
      "/portfolio/ordering/7.PNG",
      "/portfolio/ordering/8.PNG",
      "/portfolio/ordering/9.PNG",
      "/portfolio/ordering/10.PNG",
      "/portfolio/ordering/11.PNG",
      "/portfolio/ordering/12.PNG",
      "/portfolio/ordering/13.PNG",
      "/portfolio/ordering/14.PNG",
    ],
    descriptions:
      "Ordering system by Nuxt.js/Vuetify.js. <br />Cart module , Coupon module , Member module , Point module , Order module , Menu module , Branch module.",
    url: "https://demo.ordering.staging.52888.tw/",
  },
  {
    id: "3",
    name: "Inmood",
    images: [
      "/portfolio/inmood/1.PNG",
      "/portfolio/inmood/2.PNG",
      "/portfolio/inmood/3.PNG",
      "/portfolio/inmood/4.PNG",
      "/portfolio/inmood/5.PNG",
      "/portfolio/inmood/6.PNG",
      "/portfolio/inmood/7.PNG",
      "/portfolio/inmood/8.PNG",
      "/portfolio/inmood/9.PNG",
      "/portfolio/inmood/10.PNG",
      "/portfolio/inmood/11.PNG",
    ],
    descriptions:
      "CMS by Nuxt.js/tailwind.css. <br/>Shop module , Member module , Page module , Order module , News module.",
    url: "https://yi-mu-tian.52888.tw/zh-Hant",
  },
  {
    id: "4",
    name: "OCO EMS/SCADA",
    images: [
      "/portfolio/scada/0.PNG",
      "/portfolio/scada/10.PNG",
      "/portfolio/scada/10-1.PNG",
      "/portfolio/scada/1.PNG",
      "/portfolio/scada/1-1.PNG",
      "/portfolio/scada/1-2.PNG",
      "/portfolio/scada/2.PNG",
      "/portfolio/scada/2-1.PNG",
      "/portfolio/scada/3.PNG",
      "/portfolio/scada/4.PNG",
      "/portfolio/scada/5.PNG",
      "/portfolio/scada/6.PNG",
      "/portfolio/scada/7.PNG",
      "/portfolio/scada/11.PNG",
      "/portfolio/scada/12.PNG",
      "/portfolio/scada/13.PNG",
    ],
    descriptions:
      "This is an integrated system of SCADA and EMS, compliant with the intelligent building standards by Vue.js/Ant Design Vue. <br/> SCADA Module, EMS Module, Notify Module, Statistics Module , Alarm Module. <br/> <br/> Account: demo <br/> Password: demo",
    url: "https://ocoservice.oco.com.tw:9080/auth/fdff1878-a54a-44ee-b82c-a62bdc5cdb55",
  },
];

const route = useRoute();
const tar = projects.find((el) => el.id === route.params.id);
const heading = ref(tar?.name);
const description = ref(tar?.descriptions);
const images = ref(tar?.images);
const url = ref(tar?.url);
const goBack = ref("GO BACK");
const goExplore = ref("GO EXPLORE");
const hover = ref(null) as unknown;
const getImage = (url: string) => {
  const baseurl = import.meta.env.BASE_URL;
  if (url.match(baseurl)) {
    return url;
  } else {
    return baseurl + url;
  }
};
</script>
<template>
  <div class="flex flex-col justify-center text-secondary my-20 mx-5 lg:mx-0">
    <p class="text-3xl pb-2 border-b-2 border-secondary">{{ heading }}</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
      <div
        v-for="(v, i) in images"
        class="relative rounded-xl w-full h-0 p-0 cursor-pointer bg-white bg-no-repeat bg-contain bg-center transition-all hover:scale-[2] hover:z-10"
        style="padding-bottom: 60%"
        :style="{ backgroundImage: `url(${getImage(v)})` }"
        @mouseover="hover = i"
        @mouseleave="hover = null"
      ></div>
    </div>
    <p v-html="description" class="text-center mt-24 text-xl"></p>
    <div class="flex justify-between items-center mt-20 lg:mx-40">
      <button
        class="mx-2 bg-third text-secondary text-base hover:text-third lg:text-lg"
        @click="$router.push({ name: 'Index', hash: '#portfolio' })"
      >
        {{ goBack }}
      </button>
      <button
        class="mx-2 bg-secondary text-third text-base hover:text-secondary lg:text-lg"
      >
        <a :href="url" target="_blank">
          {{ goExplore }}
        </a>
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
button {
  @apply rounded-lg w-52 h-16 text-xl;
  &:nth-child(1) {
    display: inline-block;
    background: linear-gradient(to left, $third-color 50%, $secondary-color 50%)
      right;
    background-size: 200%;
    transition: 0.4s ease-out;
  }
  &:nth-child(2) {
    display: inline-block;
    background: linear-gradient(to left, $secondary-color 50%, $third-color 50%)
      right;
    background-size: 200%;
    transition: 0.4s ease-out;
  }
  &:hover {
    background-position: left;
  }
}
</style>
