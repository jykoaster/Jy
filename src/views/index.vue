<script setup lang="ts">
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
import Notebook from "@/components/Notebook.vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { watch } from "vue";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const props = defineProps<{
  enterIn: Boolean;
}>();
defineEmits<{
  (e: "enter"): void;
}>();
const router = useRouter();
const toPortfolioDetail = (id: string) => {
  router.push({ name: "Portfolio", params: { id } });
};

onBeforeRouteLeave((to, from) => {
  if (from.name === "Index") {
    const currentPos = window.pageYOffset || document.documentElement.scrollTop;
    sessionStorage.setItem("index_scroll_pos", currentPos.toString());
  }
});

gsap.registerPlugin(ScrollToPlugin);
watch(
  () => props.enterIn,
  (newVal) => {
    if (newVal) {
      const savedPos = sessionStorage.getItem("index_scroll_pos");
      if (savedPos) {
        setTimeout(() => {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: parseInt(savedPos) },
            ease: "power2.inOut",
          });
        }, 400);
      }
    }
  },
  { immediate: true }
);
</script>
<template>
  <div>
    <transition name="fade">
      <Notebook v-if="!enterIn" @enter="$emit('enter')" />
    </transition>
    <div v-if="enterIn">
      <Home id="home" />
      <About id="about" />
      <Portfolio id="portfolio" @toDetail="toPortfolioDetail" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
