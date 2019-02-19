<template>
  <div class="main-container has-background-base has-text-white">
    <the-nav-bar></the-nav-bar>
    <nuxt/>
  </div>
</template>
<script>
import TheNavBar from '~/components/TheNavBar.vue'

export default {
  components: {
    TheNavBar
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
