<template>
  <swiper
    :swiper-params="swiperParams"
    :effect="'fade'"
    :pagination="paginationOptions"
    loop
    navigation
    autoplay
    class='home-slider'
  >
    <swiper-slide
      v-for="(image, index) in getImages"
      :key="index"
    >
      <div
        class="swiper__img"
        :style="{ backgroundImage: 'url(' + require(`@/assets/img/${image}`) + ')' }"
      >
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      paginationOptions: {
        clickable: true
      },
    }
  },
  computed: {
    ...mapGetters('home', ['getImages'])
  },
}
</script>

<style lang="scss">
.swiper {
  height: 100dvh;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  z-index: 0;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper__img {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }

  .swiper-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: var(--Black, #151515);
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 30px;
    bottom: calc(92px/1920px * 100%);
    z-index: 20;
  }

  .swiper-pagination-bullet {
    border-radius: 0;
    width: 10%;
    height: 2px;
    background-color: #151515;
    opacity: 1;
    transition: transform .1s, color .5s;

    @media (min-width: 576px) {
      width: 80px;
      height: 3px;
    }
    @media (min-width: 768px) {
      width: 120px;
      height: 3px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
    transform: scaleY(2);
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev,
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    width: 50%;
    height: 90%;
    top: 0;
    display: none;

    @media (min-width: 992px) {
      display: flex;
    }
  }

  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: '';
  }
}
</style>