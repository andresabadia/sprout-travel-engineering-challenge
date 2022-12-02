<template>
  <div class="travel-itinerary">
    <TravelInfo
      v-for="travelInfo in travel.itinerary"
      :travelInfo="travelInfo"
    />
  </div>
</template>
<script lang="ts" setup>
import type { Travel } from "@/models/Travel";
import TravelInfo from "./TravelInfo.vue";

defineProps<{
  travel: Travel;
}>();
</script>
<style lang="scss" scoped>
.travel-itinerary {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--color-background-mute);
}
</style>
