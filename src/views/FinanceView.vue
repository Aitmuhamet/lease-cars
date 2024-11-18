<template>
  <main :class="{ 'main': true, 'page-top-padding': $route.meta.mainPage === false }">
    Finance
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
}
</style>