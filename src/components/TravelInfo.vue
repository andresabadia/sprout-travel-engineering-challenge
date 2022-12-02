<template>
  <div class="travel-info">
    {{ travelInfo }}
  </div>
</template>
<script lang="ts" setup>
import type { TravelJourney } from "@/models/Travel";

defineProps<{
  travelInfo: TravelJourney;
}>();
</script>

<style lang="scss" scoped>
.travel-info {
  padding: 1rem;
  background-color: var(--color-background);
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
