<template>
  <section class="leasing-info">
    <div class="container">
      <base-heading
        :title="getLeasingInfo.title"
        level="2"
        customClass="heading-h2"
      ></base-heading>

      <base-text
        :text="getLeasingInfo.description"
        customClass="leasing-info__description text"
      ></base-text>

      <base-heading
        :title="getLeasingInfo.headingH3"
        level="3"
        customClass="leasing-info__subtitle heading-h3"
      ></base-heading>

      <ul class="leasing-info__list">
        <li
          v-for="(item, index) in getLeasingInfo.rules"
          :key="index"
          class="leasing-info__item"
        >
          <span>{{ index + 1 }}</span>
          <base-text
            :text="item"
            customClass="leasing-info__rule text"
          ></base-text>
        </li>
      </ul>

      <base-text
        :text="getLeasingInfo.note"
        customClass="leasing-info__note text"
      ></base-text>
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
    ...mapGetters('home', ['getLeasingInfo'])
  }
}
</script>

<style lang="scss" scoped>
.leasing-info {
  padding-top: 150px;
}

.leasing-info__description {
  max-width: 580px;
  margin-top: 50px;
}

.leasing-info__subtitle {
  max-width: 580px;
  margin-top: 50px;
  text-align: left;
}

.leasing-info__list {
  margin: 50px 0 70px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 70px;
}

.leasing-info__item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    flex-shrink: 0;
    background-color: #06f;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--white, #FFF);

    /* H1 */
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}

.leasing-info__rule {
  max-width: 270px;
}
.leasing-info__note {
  max-width: 580px;
}
</style>