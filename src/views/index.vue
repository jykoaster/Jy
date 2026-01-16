<script setup lang="ts">
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
import Notebook from "@/components/Notebook.vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { watch } from "vue";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useScrollStore } from "@/stores/useScrollStore";
import { useRoute } from "vue-router";

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

gsap.registerPlugin(ScrollToPlugin);
const route = useRoute();
const scrollStore = useScrollStore();

onBeforeRouteLeave((to, from) => {
  if (from.name === "Index") {
    const currentPos = window.pageYOffset || document.documentElement.scrollTop;
    scrollStore.setIndexScrollY(currentPos);
  }
});

const performScroll = (target: string | number, duration = 0.8) => {
  gsap.to(window, {
    duration,
    scrollTo:
      typeof target === "string" ? { y: target, offsetY: 96 } : { y: target },
    ease: "power2.inOut",
    overwrite: "auto",
  });
};
watch(
  [() => props.enterIn, () => route.hash],
  async ([isEntered, currentHash], [oldEntered]) => {
    if (!isEntered) return;
    if (currentHash) {
      performScroll(currentHash);
    } else if (isEntered !== oldEntered && scrollStore.indexScrollY > 0) {
      setTimeout(() => {
        performScroll(scrollStore.indexScrollY, 0.8);
      }, 350);
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
