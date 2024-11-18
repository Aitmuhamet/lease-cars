<template>
  <button class="btn" @click="toggleTheme">Theme</button>
</template>

<script>
export default {
  mounted() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.$store.state.currentTheme = savedTheme;
      document.documentElement.className = this.$store.state.currentTheme
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit({
        type: 'toggleTheme'
      })
    }
  },

}
</script>

<style lang="scss" scoped></style>