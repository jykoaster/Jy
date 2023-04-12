<script setup lang="ts">
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Notebook from '@/components/Notebook.vue'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoading } from 'vue-loading-overlay'

const $loading = useLoading({
  // options
  backgroundColor: '#111111',
})
// or use inject without importing useLoading
// const $loading =  inject('$loading')

const router = useRouter()
const menu = ref(false)
const isInit = ref(false)
const enterIn = ref(false)
const imagesToPreload = [
  '/NB.webp',
  '/NB_m.webp',
  '/man.webp',
  '/port1.webp',
  '/port2.webp',
  '/texture/notebook.png',
  '/texture/notebook2.png',
  '/texture/notebook3.png',
  '/texture/notebook4.png',
]
onBeforeMount(() => {
  const loader = $loading.show({
    // Optional parameters
  })

  const images = imagesToPreload.map((imageSrc) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = imageSrc
      img.onload = resolve
      img.onerror = reject
    })
  })

  Promise.all(images)
    .then(() => {
      loader.hide()
      isInit.value = true
    })
    .catch((error) => {
      console.error(error.message)
    })
})

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
  <div v-if="isInit">
    <transition name="fade">
      <Notebook v-if="!enterIn" @enter="enterIn = true" />
    </transition>
    <div class="overflow-hidden">
      <transition name="fade">
        <Header v-show="enterIn" :isMenuOpen="menu" @openMenu="openMenu" @close="closeMenu" />
      </transition>
      <transition name="scale">
        <Menu v-if="menu" @goto="scrollTo" />
      </transition>
      <div class="max-w-7xl mx-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component v-show="enterIn" :is="Component" @goto="scrollTo" />
          </transition>
        </router-view>
      </div>
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
