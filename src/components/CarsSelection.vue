<template>
  <section class="cars-selection">
    <div class="container">
      <base-heading
        :title="carsSelectionData.title"
        level="2"
        customClass="car-selection__title heading-h2"
      ></base-heading>

      <cars-tabs></cars-tabs>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseHeading from './base/BaseHeading.vue';
import CarsTabs from './CarsTabs.vue';

export default {
  computed: {
    ...mapGetters('cars', ['carsSelectionData']),
  },
  components: {
    BaseHeading,
    CarsTabs
  },
}
</script>

<style lang="scss" scoped>
.car-selection__title {
  margin-top: 100px;
}
</style>