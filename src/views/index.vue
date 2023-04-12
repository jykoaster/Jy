<script setup lang="ts">
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const toPortfolioDetail = (data: any) => {
  router.push({ name: 'portfolio', params: data })
}
</script>
<template>
  <div>
    <Home id="home" />
    <About id="about" />
    <Portfolio id="portfolio" @toDetail="toPortfolioDetail" />
  </div>
</template>
