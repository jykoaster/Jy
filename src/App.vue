<script setup lang="ts">
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const menu = ref(false)

const openMenu = () => {
  inserted()
  menu.value = true
}

const closeMenu = () => {
  unbind()
  menu.value = false
}

const scrollTo = (block: string) => {
  router.push('/').then(() => {
    unbind()
    menu.value = false
    const el = document.getElementById(block)
    if (el) {
      window.scrollTo({
        behavior: 'smooth',
        top: el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 96,
      })
      // el.scrollIntoView({ behavior: 'smooth', top:'96px' })
    }
  })
}

const inserted = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'
}

const unbind = () => {
  const body = document.body
  body.style.position = ''
  const top = body.style.top
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
  body.style.top = ''
}
</script>

<template>
  <div class="overflow-hidden">
    <Header :isMenuOpen="menu" @openMenu="openMenu" @close="closeMenu" />
    <Transition name="scale">
      <Menu v-if="menu" @goto="scrollTo" />
    </Transition>
    <div class="max-w-7xl mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" @goto="scrollTo" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
  transform-origin: top right;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
