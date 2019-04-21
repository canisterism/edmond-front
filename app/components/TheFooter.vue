<template>
  <section class="section-footer">
    <div class="line"></div>
    <div class="copyright font-xsmall">{{thisYear}} @copyright giftee.inc edmond team</div>
  </section>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
.section-footer
  bottom: 0
  background-color: $base-color
  width: 100%
  padding: 1rem

.line
  border: 0.5px $second-base-color solid

.copyright
  margin-top: 1rem
  text-align: center
</style>
