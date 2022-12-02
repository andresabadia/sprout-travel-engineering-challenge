<template>
  <TravelItinerary v-for="travel in travels" :travel="travel" />
</template>
<script lang="ts" setup>
import axios from "axios";
import { ref, type Ref } from "vue";
import TravelItinerary from "./TravelItinerary.vue";
import type { Travel } from "@/models/Travel";

const TRAVEL_API_URL = "/data.json";
const travels: Ref<Travel[]> = ref([]);

// getting travel data from API
(async () => {
  try {
    const travelRequest = await axios.get<Travel[]>(TRAVEL_API_URL);
    travels.value = travelRequest.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
})();
</script>
