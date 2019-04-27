<template>
  <div class="main-container">
    <the-nav-bar></the-nav-bar>
    <nuxt class="content"/>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheNavBar from '~/components/TheNavBar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style lang="sass" scoped>
.main-container
  min-height: 100vh
  min-width: 100vw
  background-color: $base-color
  color: $second-base-color

.content
  margin: 1rem 2rem
  min-height: 80vh
  @media screen and (max-width: 480px)
    margin: 1rem 0.5rem

</style>
