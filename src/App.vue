<script setup lang="ts">
import TheHeading from "./components/TheHeading.vue";
import TravelList from "./components/TravelList.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <TheHeading heading="Travel Engineering Challenge" />
    </div>
  </header>

  <main>
    <TravelList />
  </main>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  @media (min-width: 1024px) {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
}

main {
  margin-top: 4rem;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
}
</style>
