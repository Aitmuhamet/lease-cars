<template>
  <section class="cars-selection">
    <div class="container">
      <base-heading
        :title="getCarsSelection.title"
        level="2"
        customClass="car-selection__title heading-h2"
      ></base-heading>

      <div class="tabs">
        <button
          v-for="(category) in getCarsSelection.categories"
          :key="category.id"
          :class="{ active: category.id === activeCategoryId }"
          @click="setActiveCategory(category.id)"
        >{{ category.name }}</button>
      </div>

      <div
        class="tab-content"
        v-if="activeCategory"
      >
        {{ activeCategory.content }}
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import BaseHeading from './base/BaseHeading.vue';

export default {
  computed: {
    ...mapGetters('cars', ['getCarsSelection']),
    activeCategory() {
      return this.getCarsSelection.categories.find(category => category.id === this.getCarsSelection.activeCategoryId)
    }
  },
  methods: {
    ...mapMutations('cars', ['setActiveCategory'])
  },
  components: {
    BaseHeading
  },

}
</script>

<style lang="scss" scoped>
.car-selection__title {
  margin-top: 100px;
}
</style>