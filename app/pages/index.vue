<template>
  <section class>
    <!-- メインコンテンツ おわり -->
    <div class="main-container columns is-multiline">
      <book-card/>
      <book-card/>
      <book-card/>
      <book-card/>
      <book-card/>
      <div class="line"></div>
      <!-- ↑↑↑↑要検討↑↑↑↑ -->
      <book-card/>
      <book-card/>
      <!-- メインコンテンツ おわり-->
    </div>
  </section>
</template>

<script>
import BookCard from '~/components/BookCard.vue'
// eslint-disable-next-line
import book_by_title from '~/apollo/queries/bookByTitle'

export default {
  components: {
    BookCard
  },
  data: () => {
    return {
      books: {}
    }
  },
  apollo: {
    book_by_title: {
      query: book_by_title,
      variables() {
        return {
          title: 'にぎ'
        }
      }
    }
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
