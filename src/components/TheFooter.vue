<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__navigation">
        <div
          class="footer__list"
          v-for="(list, index) in footer.lists"
          :key="index"
        >
          <base-heading
            :title="list.title"
            level="5"
            custom-class="footer__list-title header-h5"
          ></base-heading>

          <ul class="footer__link-list">
            <li
              v-for="(linkTxt, index) in list.links"
              :key="index"
              class="footer__link-item"
            ><a
                href="#"
                class="footer__link"
              >{{ linkTxt }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__stores">
        <a
          href="#"
          class="footer__store-link"
          v-for="(item, index) in footer.stores"
          :key="index"
        >
          <img
            :src="getImageSrc(item)"
            alt=""
          >
        </a>
        <a
          href="#"
          class="footer__store-link"
        >
          <img
            src=""
            alt=""
          >
        </a>
      </div>

      <div class="footer__copyright">
        <p
          v-for="(text, index) in footer.copyright"
          :key="index"
          class="footer__copyright-text"
          v-html="text"
        ></p>
      </div>

      <div class="footer__policies">
        <a
          href="#"
          v-for="(policies, index) in footer.policies"
          :key="index"
          class="footer__policies-link"
        >{{ policies }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';
import BaseHeading from './base/BaseHeading.vue';
import './TheFooter.scss'

export default {
  components: {
    BaseHeading
  },
  computed: {
    ...mapState({
      footer: state => state.footer,
    })
  },
  methods: {
    getImageSrc(imagePath) {
      return require(`@/assets/img/${imagePath}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>