import type { Travel } from "@/models/Travel";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useTravelStore = defineStore("travel", () => {
  const travel: Ref<Travel | undefined> = ref();
  return { travel };
});
