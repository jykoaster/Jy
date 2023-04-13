<script setup lang="ts">
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Notebook from '@/components/Notebook.vue'
import { useRoute, useRouter } from 'vue-router'
// import { ref } from 'vue'
defineProps<{
  enterIn: Boolean
}>()
defineEmits<{
  (e: 'enter'): void
}>()
const router = useRouter()
const route = useRoute()
// const enterIn = ref(route.name !== 'Index')
const toPortfolioDetail = (id: string) => {
  router.push({ name: 'Portfolio', params: { id } })
}
</script>
<template>
  <div>
    <transition name="fade">
      <Notebook v-if="!enterIn" @enter="$emit('enter')" />
    </transition>
    <transition name="fade">
      <div v-if="enterIn">
        <Home id="home" />
        <About id="about" />
        <Portfolio id="portfolio" @toDetail="toPortfolioDetail" />
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
