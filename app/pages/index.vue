<template>
  <section class>
    <h3 class="number-of-search-hit">検索結果：{{books.length}}件</h3>
    <div class="line"></div>
    <div class="main-container">
      <book-card v-for="book in books" v-bind="book"/>
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
.line {
  border: 0.5px white solid;
  width: 100%;
}
.number-of-search-hit {
  margin-bottom: 0.5rem;
}
.main-container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 0.9fr));
  grid-column-gap: 1rem;
}
</style>
