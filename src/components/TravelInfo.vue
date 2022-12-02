<template>
  <div class="travel-info">
    <div class="departure">
      <div class="font-bold">{{ travelInfo.originPlace.cityCode }}</div>
      <div class="font-sm">{{ departureDateTime }}</div>
    </div>
    <div class="info font-sm">
      <div>{{ operatingAirline }}</div>
      <hr />
      <div>
        {{ duration }} ·
        <span v-if="travelInfo.segments.length > 1">
          {{ travelInfo.segments.length - 1 }}
          {{ travelInfo.segments.length > 2 ? "stops" : "stop" }}
        </span>
        <span v-else>nonstop</span>
      </div>
    </div>
    <div class="arrival">
      <div class="font-bold">{{ travelInfo.destinationPlace.cityCode }}</div>
      <div class="font-sm">{{ arrivalDateTime }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import type { TravelJourney } from "@/models/Travel";
import { computed } from "vue";
import { useTravelStore } from "@/store/travelStore";

const travelStore = useTravelStore();

const props = defineProps<{
  travelInfo: TravelJourney;
}>();

const DATE_TIME_FORMAT = "MMM D h:mm A";
const departureDateTime = computed(() =>
  dayjs(props.travelInfo.departureDateTime).format(DATE_TIME_FORMAT)
);

const arrivalDateTime = computed(() =>
  dayjs(props.travelInfo.arrivalDateTime).format(DATE_TIME_FORMAT)
);

// getting travel carriers info from storage
const operatingAirline = computed(
  () =>
    travelStore.travel?.carriers[props.travelInfo.segments[0].operatingAirline]
);

// eg. 1589 => 1 day 2h:29min
const duration = computed(() => {
  const minutes = props.travelInfo.duration;
  const minutesString = minutes % 60;
  const hours = minutes / 60;
  const hoursString = Math.floor(hours) % 24;
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days} ${
      days > 1 ? "days" : "day"
    } ${hoursString}h:${minutesString}min`;
  } else {
  }
  return `${hoursString}h:${minutesString}min`;
});
</script>

<style lang="scss" scoped>
.travel-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-background);
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
.info {
  text-align: center;
  margin: 0 1rem;
}
.arrival {
  text-align: end;
}

hr {
  margin: 0.2rem -1rem;
  border: 2px solid var(--color-border);
  border-radius: 2px;
}
</style>
