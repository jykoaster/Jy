<script setup lang="ts">
import Logo from './images/Logo.vue'
import Collapse from './images/CollapseIcon.vue'
defineProps({
  isMenuOpen: Boolean,
})
</script>
<template>
  <div class="h-24">
    <div class="fixed top-0 flex justify-between items-center w-full h-24 py-2 px-24 z-20 bg-primary">
      <Logo height="100%" />
      <div class="relative">
        <Transition name="collapse">
          <Collapse
            v-show="!isMenuOpen"
            width="30"
            height="30"
            class="absolute cursor-pointer text-secondary"
            @click.native="$emit('openMenu')"
          />
        </Transition>
        <Transition name="close">
          <font-awesome-icon
            v-show="isMenuOpen"
            icon="fa-solid fa-xmark"
            class="absolute text-secondary text-5xl cursor-pointer"
            @click="$emit('close')"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>
<style scope lang="scss">
.collapse-enter-active,
.collapse-leave-active {
  transition: opacity 0.5s, transform 0.5s ease;
  transform: rotate(180deg) scale(0.5);
}

.collapse-enter-from,
.collapse-leave-to {
  transform: rotate(-180deg) scale(0.5);
  opacity: 0;
}

.close-enter-active,
.close-leave-active {
  transition: opacity 0.5s, transform 0.5s ease;
  transform: rotate(-180deg) scale(0.5);
}

.close-enter-from,
.close-leave-to {
  transform: rotate(180deg) scale(0.5);
  opacity: 0;
}
</style>
