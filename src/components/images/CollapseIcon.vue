<script setup lang="ts">
defineProps({
  width: String || Number,
  height: String || Number,
})
</script>
<template>
  <svg :width="width" :height="height" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_10_528)">
      <path
        d="M28.9909 0H2.00915C0.899527 0 0 1.08433 0 2.42193V4.68999C0 6.02759 0.899527 7.11192 2.00915 7.11192H28.9909C30.1005 7.11192 31 6.02759 31 4.68999V2.42193C31 1.08433 30.1005 0 28.9909 0Z"
        fill="#EEEEEE"
      />
      <path
        d="M28.9909 8.94403H2.00915C0.899527 8.94403 0 10.0284 0 11.366V13.634C0 14.9716 0.899527 16.056 2.00915 16.056H28.9909C30.1005 16.056 31 14.9716 31 13.634V11.366C31 10.0284 30.1005 8.94403 28.9909 8.94403Z"
        fill="#EEEEEE"
      />
      <path
        d="M28.9909 17.8881H12.6648C11.5552 17.8881 10.6556 18.9724 10.6556 20.31V22.5781C10.6556 23.9156 11.5552 25 12.6648 25H28.9909C30.1005 25 31.0001 23.9156 31.0001 22.5781V20.31C31.0001 18.9724 30.1005 17.8881 28.9909 17.8881Z"
        fill="#EEEEEE"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_528">
        <rect width="31" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
