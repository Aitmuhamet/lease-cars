<template>
  <section class="reasons">
    <div class="container">
      <base-heading
        title="Why Lease with D&M?"
        level="2"
        customClass="heading-h2"
      ></base-heading>

      <ul class="reasons__list">
        <li
          class="reasons__item"
          v-for="(item, index) in getReasons"
          :key="index"
        >
          <img
            :src="getImageSrc(item.iconSrc)"
            alt=""
            class="reasons__icon"
          >
          <base-heading
            :title="item.title"
            class="reasons__item-title heading-h4"
            level="4"
          ></base-heading>
          <base-text
            :text="item.description"
            class="reasons__description text"
          ></base-text>
        </li> 
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseHeading from './base/BaseHeading.vue';
import BaseText from './base/BaseText.vue';
export default {
  computed: {
    ...mapGetters('home', ['getReasons'])
  },
  methods: {
    getImageSrc(imagePath) {
      return require(`@/assets/img/${imagePath}`)
    }
  },
  components: {
    BaseHeading,
    BaseText
  }
}
</script>

<style lang="scss" scoped>
.reasons {
  margin-top: 150px;
}
.reasons__list {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}

.reasons__description {
  /* 20.8px */
  max-width: 270px;
}
</style>