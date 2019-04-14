<template>
  <div class="main-container">
    <the-nav-bar></the-nav-bar>
    <nuxt class="content"/>
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

<style lang="sass" scoped>
.main-container
  min-height: 100vh
  min-width: 100vw
  background-color: #273c6c
  color: white

.content
  margin: 1rem 2rem

</style>
