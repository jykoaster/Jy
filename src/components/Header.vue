<script setup lang="ts">
import Collapse from './images/CollapseIcon.vue'
defineProps<{
  isMenuOpen: Boolean
}>()
defineEmits<{
  (e: 'openMenu'): void
  (e: 'close'): void
}>()
</script>
<template>
  <div class="h-24">
    <div
      class="fixed flex justify-between items-center w-full h-24 py-2 z-20 bg-primary cursor-pointer px-5 top-0 lg:px-24"
    >
      <img src="/logo.png" class="h-20 lg:h-24" alt="" @click="$router.push('/')" />
      <div class="h-24 flex items-center justify-end w-full">
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
