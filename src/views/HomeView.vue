<template>
  <main class="main">
    <section class="main__hero">
      <main-slider></main-slider>

      <h1>Leasing From D&M</h1>
      <router-link
        :to="'/new-cars'"
        custom
        v-slot="{ navigate }"
      >
        <a
          href="#"
          @click="navigate"
          class="main__btn"
        >find a car</a>
      </router-link>
    </section>

    <home-reasons></home-reasons>    
    <home-leasing-info></home-leasing-info>
    <home-welcome-video></home-welcome-video>
    <home-important-factors></home-important-factors>
  </main>
</template>

<script>
import HomeReasons from '@/components/HomeReasons.vue';
import HomeLeasingInfo from '@/components/HomeLeasingInfo.vue';
import HomeWelcomeVideo from '@/components/HomeWelcomeVideo.vue';
import HomeImportantFactors from '@/components/HomeFactors.vue';
import MainSlider from '@/components/MainSlider.vue';
export default {
  components: {
    MainSlider,
    HomeReasons,
    HomeLeasingInfo,
    HomeWelcomeVideo,
    HomeImportantFactors
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;

  transition: background-color .3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__hero {
    height: 100dvh;
    // width: 100vw;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__btn {
    margin-top: 38px;
    display: block;
    background: #151515;
    padding: 17px 80px;

    color: #FFF;

    /* button */
    text-transform: uppercase;
    text-decoration: none;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    z-index: 10;
  }

  h1 {
    color: var(--white, #FFF);

    /* H0 */
    font-family: Inter;
    font-size: 8vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    z-index: 10;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 3rem;
    }

    &__btn {
      font-size: 1rem;
      padding: 18px 113px;
    }
  }

  @media (min-width: 768px) {
    &__hero {
      padding-top: 120px;
    }

    h1 {
      font-size: 3.5rem;
    }

    &__btn {
      font-size: 1.25rem;
      padding: 18px 80px;
    }
  }

  @media (min-width: 992px) {
    &__hero {
      padding-top: 130px;
    }

    h1 {
      font-size: 3.75rem;
    }

    &__btn {
      font-size: 1.5rem;
      padding: 18px 80px;
    }
  }

  @media (min-width: 1200px) {
    &__hero {
      padding-top: 200px;
    }

    h1 {
      font-size: 5rem;
    }

    &__btn {
      font-size: 2rem;
      padding: 18px 80px;
    }
  }

  @media (min-width: 1800px) {
    &__hero {
      padding-top: 247px;
    }

    h1 {
      font-size: 6rem;
    }

    &__btn {
      font-size: 2.25rem;
      padding: 23px 113px;
    }
  }
}
</style>