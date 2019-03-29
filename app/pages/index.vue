<template>
  <section class>
    <!-- メインコンテンツ おわり -->
    <div class="main-container columns is-multiline">
      <book-card
        v-for="book in books"
        :author="book.author"
        :cover="book.cover"
        :publisher="book.publisher"
        :isbn="book.isbn"
        :title="book.title"
      />
      <!-- メインコンテンツ おわり-->
    </div>
  </section>
</template>

<script>
import BookCard from '~/components/BookCard.vue'
// eslint-disable-next-line
import bookByTitle from '~/apollo/queries/bookByTitle'

export default {
  components: {
    BookCard
  },
  data: () => {
    return {
      books: {},
      title: 'にぎ'
    }
  },
  apollo: {
    books: {
      query: bookByTitle,
      variables() {
        return {
          title: this.title
        }
      },
      update: data => {
        return data.book_by_title
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
