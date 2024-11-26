<template>
  <main :class="{'main': true, 'page-top-padding': $route.meta.mainPage === false}">
    <div class="container">
      <feedback-form></feedback-form>
      <cars-posts></cars-posts>
    </div>
  </main>
</template>

<script>
import CarsPosts from '@/components/CarsPosts.vue';
import FeedbackForm from '@/components/FeedbackForm.vue';

export default {
  components: {
    CarsPosts,
    FeedbackForm
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
}
</style>