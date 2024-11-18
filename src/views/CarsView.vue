<template>
  <main :class="{'main': true, 'page-top-padding': $route.meta.mainPage === false}">
    <div class="container">
      <cars-selection></cars-selection>

    </div>
  </main>
</template>

<script>
import CarsSelection from '@/components/CarsSelection.vue';

export default {
  components: {
    CarsSelection
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
}
</style>