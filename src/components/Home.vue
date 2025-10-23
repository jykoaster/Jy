<script setup lang="ts">
import { ref } from "vue";
const name = ref("JEREMY XIAO");
const job = ref("FRONT-END");
const Email = ref("YM31215@GMAIL.COM");
const icons = ref([
  {
    icon: "fa-brands fa-npm",
    name: "npm",
    src: "https://www.npmjs.com/~koaster",
  },
  {
    icon: "fa-brands fa-github",
    name: "github",
    src: "https://github.com/jykoaster",
  },
  {
    icon: "fa-brands fa-linkedin",
    name: "linkedin",
    src: "https://www.linkedin.com/in/jeremy-xiao-b10b19321/",
  },
]);
const goLink = (src: string) => {
  window.open(src, "_blank");
};
</script>
<template>
  <div
    class="px-5 lg:px-0 lg:flex lg:flex-col lg:justify-center lg:min-h-[calc(100vh-96px)]"
  >
    <div class="flex flex-col justify-between relative lg:flex-row">
      <Transition appear name="fade">
        <img src="/NB_m.webp" class="lg:hidden w-full" alt="NB_m" />
      </Transition>
      <div>
        <Transition appear name="bottomIn">
          <img src="/logo.webp" class="hidden lg:block" alt="logo" />
        </Transition>
        <Transition appear name="leftIn">
          <div
            class="border-2 border-white rounded-3xl text-secondary text-center text-xl p-10 mt-10 lg:text-3xl"
          >
            <p class="text-3xl lg:text-4xl mb-5">{{ name }}</p>
            <p class="mb-5 whitespace-nowrap">{{ job }}</p>
            <p class="whitespace-nowrap">{{ Email }}</p>
            <div class="flex gap-3 mt-5 justify-center">
              <div
                v-for="v in icons"
                class="rounded-full bg-third h-12 w-12 flex justify-center items-center cursor-pointer hover:animate-heartbeat"
                @click="goLink(v.src)"
              >
                <font-awesome-icon
                  :icon="v.icon"
                  class="h-8 w-8 text-secondary"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div class="hidden lg:block">
        <Transition appear name="fade">
          <img src="/NB.webp" class="w-full" alt="NB" />
        </Transition>
      </div>
    </div>
    <div class="hidden lg:block absolute bottom-10 right-24">
      <div
        v-for="v in icons"
        class="rounded-full bg-third h-14 w-14 mb-12 flex justify-center items-center cursor-pointer hover:animate-heartbeat"
        @click="goLink(v.src)"
      >
        <font-awesome-icon :icon="v.icon" class="h-8 w-8 text-secondary" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.bottomIn-enter-active,
.bottomIn-leave-active {
  transition: all 0.5s ease-in-out 0.5s;
}

.bottomIn-enter-from,
.bottomIn-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.leftIn-enter-active,
.leftIn-leave-active {
  transition: all 0.5s ease-in-out 1s;
}

.leftIn-enter-from,
.leftIn-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out 1.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
