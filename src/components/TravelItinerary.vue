<template>
  <div class="travel-itinerary">
    <TravelInfo
      v-for="travelJourney in travel.journeys"
      :travelInfo="travelJourney"
    />
  </div>
</template>
<script lang="ts" setup>
import type { TravelOption } from "@/models/Travel";
import TravelInfo from "./TravelInfo.vue";

defineProps<{
  travel: TravelOption;
}>();
</script>
<style lang="scss" scoped>
.travel-itinerary {
  margin: 1rem 0;
  padding: 1rem;
  background-color: var(--color-background-mute);
}
</style>
