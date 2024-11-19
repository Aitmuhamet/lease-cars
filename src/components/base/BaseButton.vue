<template>
  <button :class="customClass">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.show-more,
.show-less {
  margin-top: 70px;
  display: inline-flex;
  padding: 13px 61px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--background-secondary-color);
  color: var(--text-secondary-color);

  /* Text 16 */
  text-transform: uppercase;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
}
</style>