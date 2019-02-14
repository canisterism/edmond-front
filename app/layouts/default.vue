<template>
  <div class="has-background-base has-text-white">
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

<style>
</style>
