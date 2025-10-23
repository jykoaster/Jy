<script setup lang="ts">
import { ref } from "vue";
defineEmits<{
  (e: "goto", block: string): void;
}>();
const name = ref("JEREMY XIAO");
const job = ref("FRONT-END");
const Email = ref("YM31215@GMAIL.COM");
const list = ref([
  {
    name: "HOME",
    to: "home",
  },
  {
    name: "ABOUT",
    to: "about",
  },
  {
    name: "PORTFOLIO",
    to: "portfolio",
  },
]);

</script>
<template>
  <div
    class="flex flex-col justify-center fixed bottom-0 right-0 left-0 min-h-full min-w-screen z-20 bg-primary py-2 lg:px-24"
  >
    <div
      class="lg:grid lg:grid-cols-2 lg:justify-center lg:max-w-7xl lg:mx-auto"
    >
      <div>
        <img
          src="/logo.webp"
          width="472"
          height="380"
          class="hidden mx-auto lg:block"
          alt=""
        />
        <div class="hidden lg:flex lg:justify-center">
          <div
            class="border-2 border-white rounded-3xl text-secondary text-center text-xl p-10 lg:text-3xl"
          >
            <p class="text-3xl lg:text-4xl mb-5">{{ name }}</p>
            <p class="mb-5 whitespace-nowrap">{{ job }}</p>
            <p class="whitespace-nowrap">{{ Email }}</p>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
        <div
          v-for="v in list"
          class="text-secondary cursor-pointer text-5xl text-center my-5 flex justify-center"
          @click="$emit('goto', v.to)"
        >
          <p class="menu-text">
            {{ v.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.menu-text:after {
  transition: all ease-in-out 0.2s;
  background: none repeat scroll 0 0 #ffffff;
  content: "";
  display: block;
  height: 2px;
  width: 0;
}
.menu-text:hover:after {
  width: 100%;
}
</style>
