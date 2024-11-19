<template>
  <div class="tabs">
    <button
      v-for="(category) in carsSelectionData.categories"
      :key="category.id"
      class="tabs__btn"
      :class="{ 'active': category.id === carsSelectionData.activeCategoryId }"
      @click="onTabClick(category.id)"
    >{{ category.name }}</button>
  </div>

  <transition-group
    name="fade"
    tag="div"
    class="tab-content"
    v-if="currentCategory"
  >
    <div
      class="card inner"
      v-for="(item, index) in visibleCars"
      :key="index"
    >
      <div
        class="card__image"
        :style="{ backgroundImage: `url(${getImageSrc(item.imgSrc)})` }"
      >
      </div>
      <div class="card__content">
        <base-heading
          :title="`${item.manufacturer} ${item.model} ${item.year}`"
          level="4"
          custom-class="card__title heading-h4 one-line-text"
        ></base-heading>

        <base-text
          :text="`starting from $ ${item.price}`"
          custom-class="card__subtitle"
        ></base-text>

        <base-heading
          :title="`$${item.monthly_rental}/mo`"
          level="5"
          custom-class="card__price heading-h4"
        ></base-heading>

        <button class="card__button">see details</button>
      </div>
    </div>

  </transition-group>
  <base-button
    v-if="visibleCars.length < currentCategory.content.length"
    @click="showMore"
    class="show-more"
    title="show more"
    ></base-button>
    <base-button
    v-else
    @click="showLess"
    class="show-less"
    title="show less"
  ></base-button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import './CarsTabs.scss'
import BaseHeading from './base/BaseHeading.vue';
import BaseText from './base/BaseText.vue';
import BaseButton from './base/BaseButton.vue';

export default {
  data() {
    return {
      visibleCount: 12,
    }
  },
  computed: {
    ...mapGetters('cars', ['carsSelectionData', 'currentCategory']),
    getActiveCategory() {
      return this.currentCategory;
    },
    visibleCars() {
      return this.currentCategory.content.slice(0, this.visibleCount);
    }
  },
  methods: {
    ...mapMutations({
      setActiveCategory: 'cars/setActiveCategory'
    }),
    onTabClick(tabID) {
      this.setActiveCategory(tabID);
      if (this.visibleCars.length > 12) this.showLess();
    },
    getImageSrc(imagePath) {
      let result
      try {
        result = require(`@/assets/img/${imagePath}`)
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          throw e
        }
        result = require('@/assets/img/cars-1.jpg')
      }
      return result
    },
    showMore() {
      this.visibleCount += 8;
    },
    showLess() {
      this.visibleCount -= 8;
    }
  },
  components: {
    BaseHeading,
    BaseText,
    BaseButton
  },
}
</script>

<style lang="scss" scoped></style>