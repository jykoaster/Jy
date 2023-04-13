<script setup lang="ts">
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
import Notebook from "@/components/Notebook.vue";
import { useRouter } from "vue-router";
defineProps<{
  enterIn: Boolean;
}>();
defineEmits<{
  (e: "enter"): void;
}>();
const router = useRouter();
const toPortfolioDetail = (id: string) => {
  router.push({ name: "Portfolio", params: { id } });
};
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
