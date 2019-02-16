<template>
  <section class>
    <!-- メインコンテンツ おわり -->
    <div class="main-container columns is-multiline">
      <book-card></book-card>
      <book-card></book-card>
      <book-card></book-card>
      <book-card></book-card>
      <book-card></book-card>
      <div class="line"></div>
      <!-- ↑↑↑↑要検討↑↑↑↑ -->
      <book-card></book-card>
      <book-card></book-card>
      <!-- メインコンテンツ おわり-->
    </div>
  </section>
</template>

<script>
import BookCard from '~/components/BookCard.vue'

export default {
  components: {
    BookCard
  }
}
</script>

<style scoped lang="scss">
.main-container {
  margin: 1rem;
}
.line {
  border: 1px #cec6bb solid;
  width: 100%;
}
</style>
