<template>
  <section class="factors">
    <div class="container">
      <div class="factors__content">
        <base-heading
          :title="getFactors.title"
          level="2"
          custom-class="heading-h2"
        ></base-heading>

        <base-text
          :text="getFactors.subtitle"
          custom-class="factors__subtitle text"
        ></base-text>

        <ul class="factors__list">
          <li
            v-for="(item, index) in getFactors.list"
            :key="index"
            class="factors__item"
          >
            <img
              :src="getImageSrc(item.imgSrc)"
              :alt="'Image from:' + item.description"
            >
            <base-text
              :text="item.description"
              custom-class="text"
            ></base-text>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseHeading from './base/BaseHeading.vue';
import BaseText from './base/BaseText.vue';

export default {
  components: {
    BaseHeading,
    BaseText
  },
  computed: {
    ...mapGetters('home', ['getFactors'])
  },
  methods: {
    getImageSrc(imagePath) {
      return require(`@/assets/img/${imagePath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.factors {
  padding-top: 50px;

  @media (min-width: 576px) {
    padding-top: 100px;
  }
  @media (min-width: 992px) {
    padding-top: 150px;
  }
}
.factors__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.factors__subtitle {
  margin-top: 20px;
  max-width: 580px;
}

.factors__list {
  margin-top: 50px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
  }
}
.factors__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>