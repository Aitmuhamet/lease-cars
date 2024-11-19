<template>
  <main :class="{'main': true, 'page-top-padding': $route.meta.mainPage === false}">
    Contact Us

    <div class="container">

      <cars-posts></cars-posts>
    </div>
  </main>
</template>

<script>
import CarsPosts from '@/components/CarsPosts.vue';

export default {
  components: {
    CarsPosts
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
}
</style>