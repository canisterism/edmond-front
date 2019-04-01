<template>
  <section class>
    <!-- メインコンテンツ おわり -->
    <div class="main-container columns is-multilines">
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
import { mapGetters } from 'vuex'

export default {
  components: {
    BookCard
  },
  computed: {
    ...mapGetters('books', ['books'])
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
