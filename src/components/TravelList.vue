<template>
  <TravelItinerary
    v-for="travelOption in travelOptions"
    :travel="travelOption"
  />
</template>
<script lang="ts" setup>
import axios from "axios";
import { ref, type Ref } from "vue";
import TravelItinerary from "./TravelItinerary.vue";
import type { Travel, TravelOption } from "@/models/Travel";

const TRAVEL_API_URL = "/data.json";
const travelOptions: Ref<TravelOption[]> = ref([]);

// getting travel data from API
(async () => {
  try {
    const travelRequest = await axios.get<Travel>(
      `${TRAVEL_API_URL}?stamp=${new Date().getTime()}`
    );
    travelOptions.value = travelRequest.data.options;
  } catch (error) {
    // handle error
    console.log(error);
  }
})();
</script>
