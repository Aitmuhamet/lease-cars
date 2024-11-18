<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view></router-view>
    <!-- <theme-toggle></theme-toggle> -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
// import ThemeToggle from './components/ThemeToggle.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    // ThemeToggle,
    TheFooter
  },
}
</script>

<style>
#app {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
}

</style>
