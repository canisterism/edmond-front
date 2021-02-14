<template>
  <section class>
    <div class>
      <div class="book-info">
        <div class="font-small">{{ book.publisher }}</div>
        <div class="font-xlarge">{{ book.title }}</div>
        <div class="font-small">{{ book.author }}</div>
        <div class="cover">
          <img :src="book.cover ? book.cover : noImage" alt>
        </div>
        <div v-if="showBetafunctions">
          <div class="status">
            <i class="fas fa-check"></i>貸出可
          </div>
          <button class="button borrow" @click="onClickBorrow()">借りる(未実装です)</button>
          <div class="borrowing-info">
            <h4>借りている人</h4>
            <ul class="borrowing-users font-small">
              <nuxt-link to="/user/1">
                <li class="borrowing-user">
                  <span>otani</span>
                </li>
              </nuxt-link>
            </ul>
          </div>
        </div>
        <div>
          開発中の画面を見る
          <input type="checkbox" v-model="showBetafunctions">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import noImage from '~/assets/images/no_image.jpg'

export default {
  async asyncData({ store, params }) {
    if (store.state.books.books.length !== 0) {
      return {
        book: store.getters['books/bookByIsbn'](parseInt(params.isbn))
      }
    } else {
      await store.dispatch('books/searchByIsbn', {
        isbn: parseInt(params.isbn)
      })
      return {
        book: store.state.books.book
      }
    }
  },
  data() {
    return {
      showBetafunctions: false,
      noImage: noImage
    }
  },
  methods: {
    onClickBorrow() {
      alert('まだ貸出はできません！ごめんなさい！')
    }
  }
}
</script>

<style lang="sass" scoped>
.book-info
  margin: 2rem auto 0
  box-sizing: border-box
  width: 60%
  @media screen and (max-width: 720px)
    width: 100%

.cover
  text-align: center
  display: inline-block
  margin: 2rem 0
  @media screen and (max-width: 480px)
    margin: 1rem 0

.status
  width: 7rem
  background: $success-color
  text-align: center
  display: block
  color: $base-color
  border: none
  border-radius: 5px
  > i
    line-height: 2
    display: inline-block
    margin-right: 0.5rem

.button
  &.borrow
    display: inline-block
    background: $primary-color
    border-radius: 5px
    box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
    color: $base-color
    font-weight: bold
    height: 2.5rem
    margin: 1rem 0
    line-height: 2
    min-width: 15rem
    max-width: 20rem

.borrowing-info
  > h4
    font-weight: bold
    padding-bottom: 0.2rem
    border-bottom: 1px $line-color solid

.borrowing-user
  text-align: center
  width: 10rem
  margin: 1rem 8rem 1rem 0
  text-decoration: none
  border-radius: 2px
  color: $second-base-color
  box-shadow: 1px 3px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
  cursor: pointer
  &:hover
    border: solid 1px $second-base-color
    box-sizing: border-box
</style>
