<script setup lang="ts">
defineProps({
  width: String || Number,
  height: String || Number,
})
</script>
<template>
  <svg :width="width" :height="height" viewBox="0 0 49 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M36.6241 0.184082L34.9523 1.20239L43.8877 6.65703H0.778442V8.09793H46.7827C47.5053 8.09793 48.2798 8.06143 48.1996 7.49778C48.1287 7.11596 47.5809 6.86141 47.1559 6.58867L44.8748 5.19794L42.008 3.45252L39.2358 1.76614L37.2333 0.547636L36.6241 0.184082Z"
      fill="#101010"
    />
  </svg>
</template>
