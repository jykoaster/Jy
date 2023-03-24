<script setup lang="ts">
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toPortfolioDetail = (id: string) => {
  router.push(`/portfolio/${id}`);
};
</script>
<template>
  <Home id="home" />
  <About id="about" />
  <Portfolio id="portfolio" @toDetail="toPortfolioDetail" />
</template>
