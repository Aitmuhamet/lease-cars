<template>
  <main :class="{ 'main': true, 'page-top-padding': $route.meta.mainPage === false }">
    Lease VS Buy
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