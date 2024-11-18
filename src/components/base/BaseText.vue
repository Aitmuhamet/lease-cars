<template>
  <div :class="customClass">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    customClass: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.text {
  text-align: left;
  color: var(--Black, #151515);

  /* Text 16 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  // text-wrap: balance;
}
</style>