<template>
  <main :class="{'main': true, 'page-top-padding': $route.meta.mainPage === false}">
    <div class="container">
      <cars-selection></cars-selection>
      <cars-posts></cars-posts>
    </div>
  </main>
</template>

<script>
import CarsPosts from '@/components/CarsPosts.vue';
import CarsSelection from '@/components/CarsSelection.vue';

export default {
  components: {
    CarsSelection,
    CarsPosts
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
}
</style>