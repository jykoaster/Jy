<script setup lang="ts">
import Logo from "./images/Logo.vue";
import { ref } from "vue";
const name = ref("JEREMY XIAO");
const job = ref("FRONT-END ENGINEER");
const Email = ref("EMAIL:");
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
    class="fixed top-24 bottom-0 right-0 left-0 lg:min-h-screen min-w-screen z-50 bg-primary px-24 py-2"
  >
    <div class="grid grid-cols-2 justify-center max-w-7xl mx-auto">
      <div>
        <Logo width="472" height="380" class="mx-auto" />
        <div class="flex justify-center">
          <div
            class="border-2 border-white rounded-3xl text-secondary text-4xl p-10"
          >
            <p class="text-center mb-5">{{ name }}</p>
            <p class="mb-5">{{ job }}</p>
            <p>{{ Email }}</p>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <div
          v-for="v in list"
          class="text-secondary cursor-pointer text-5xl text-center mb-10 flex justify-center"
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
