<template>
  <section class="car-posts">
    <div
      class="car-posts__item"
      v-for="(post, index) in posts"
      :key="index"
    >
      <div class="car-posts__img-wrapper">
        <img
          :src="getImageSrc(post.imgSrc)"
          alt=""
        >
      </div>

      <div class="car-posts__content">
        <base-heading
          :title="post.title"
          level="4"
          custom-class="heading-h4 car-posts__title"
        ></base-heading>

        <button class="car-posts__btn">more</button>
      </div>
    </div>
  </section>
  <base-button
    title="show more"
    class="show-more"
  ></base-button>
</template>

<script>
import { mapGetters } from 'vuex';
import './CarsPosts.scss'
import BaseHeading from './base/BaseHeading.vue';
import BaseButton from './base/BaseButton.vue';
export default {
  computed: {
    ...mapGetters('cars', {
      posts: 'postsData'
    })
  },
  methods: {
    getImageSrc(imagePath) {
      let result;
      try {
        result = require(`@/assets/img/${imagePath}`);
      } catch (error) {
        console.log('error:', error);
        console.log('error message:', error.message);
        result = require('@/assets/img/no-image-available.png')
      }
      return result
    }
  },
  components: {
    BaseHeading,
    BaseButton
  }
}
</script>

<style lang="scss" scoped></style>