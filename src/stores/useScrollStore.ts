import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollStore = defineStore("scroll", () => {
  const indexScrollY = ref(0);

  const setIndexScrollY = (val: number) => {
    indexScrollY.value = val;
  };

  return { indexScrollY, setIndexScrollY };
});
