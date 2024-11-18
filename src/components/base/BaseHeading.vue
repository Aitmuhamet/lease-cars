<template>
  <component :is="'h' + level" :class="customClass">{{ title }}</component>
</template>

<script>
import './BaseHeading.scss'
  export default {
    props:{
      title: {type: String, required: true},
      level: {type: Number, default: 2},
      customClass: {type: String, default: ''}
    }
  }
</script>

<style lang="scss" scoped>
</style>