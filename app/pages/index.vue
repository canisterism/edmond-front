<template>
  <section class>
    <div v-if="searchWord">
      <h3 class="number-of-search-hit">「{{searchWord}}」の検索結果：{{books.length}}件</h3>
      <div class="line"></div>
    </div>
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
    ...mapGetters('books', ['books', 'searchWord'])
  }
}
</script>

<style scoped lang="sass">
.line
  border: 0.5px $line-color solid
  width: 100%

.number-of-search-hit
  margin-bottom: 0.5rem

.main-container
  margin-top: 1rem
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(9rem, 0.9fr))
  grid-column-gap: 1rem
  grid-row-gap: 1rem
  @media screen and (max-width: 480px)
    grid-column-gap: 0.5rem
  @media screen and (min-width: 720px)
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1.5fr))
</style>
