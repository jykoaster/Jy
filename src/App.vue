<script setup lang="ts">
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLoading } from "vue-loading-overlay";

const $loading = useLoading({
  // options
  backgroundColor: "#111111",
  color: "#e2e8f0",
});
const route = useRoute();
const router = useRouter();
const menu = ref(false);
const isInit = ref(false);

const enterIn = ref(route.name !== "Index");
const imagesToPreload = [
  "/NB.webp",
  "/NB_m.webp",
  "/man.webp",
  "/port1.webp",
  "/port2.webp",
  "/texture/notebook.png",
  "/texture/notebook2.png",
  "/texture/notebook3.png",
  "/texture/notebook4.png",
  "/portfolio/ordering/14.PNG",
  "/portfolio/inmood/1.PNG",
  "/portfolio/shangxiang/1.PNG",
];
onBeforeMount(() => {
  const loader = $loading.show();

  const images = imagesToPreload.map((imageSrc) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  Promise.all(images)
    .then(() => {
      loader.hide();
      isInit.value = true;
    })
    .catch((error) => {
      console.error(error.message);
    });
});

const openMenu = () => {
  menu.value = true;
};

const closeMenu = () => {
  menu.value = false;
};

const scrollTo = (block: string) => {
  menu.value = false;
  router.push({ name: "Index", hash: `#${block}` });
};
</script>

<template>
  <div v-if="isInit">
    <div class="overflow-hidden">
      <transition name="fade">
        <Header
          v-show="enterIn"
          :isMenuOpen="menu"
          @openMenu="openMenu"
          @close="closeMenu"
        />
      </transition>
      <transition name="scale">
        <Menu v-if="menu" @goto="scrollTo" />
      </transition>
      <div class="max-w-7xl mx-auto">
        <router-view v-slot="{ Component }">
          <transition appear name="fade">
            <component
              :enterIn="enterIn"
              :is="Component"
              @goto="scrollTo"
              @enter="enterIn = true"
            />
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
  transition: all 0.8s ease-in-out;
}
.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
