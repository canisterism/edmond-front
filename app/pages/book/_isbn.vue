<template>
  <section class>
    <div class>
      <div class="book-info">
        <div class="font-small">{{ book.publisher }}</div>
        <div class="font-xlarge">{{ book.title }}</div>
        <div class="font-small">{{ book.author }}</div>
        <div class="cover">
          <img :src="book.cover" alt>
        </div>
        <div v-if="showBetafunctions">
          <div class="status">
            <i class="fas fa-check"></i>貸出可
          </div>
          <div class="button borrow font-small" @click="onClickBorrow()">借りる(未実装です)</div>
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
export default {
  asyncData({ store, params }) {
    if (store.state.books.books.length !== 0) {
      return {
        book: store.getters['books/bookByIsbn'](parseInt(params.isbn))
      }
    } else {
      // fixme: bookByIsbn実装されたらコメントアウト解除
      // await store.dispatch('books/searchByIsbn', { isbn: params.isbn })
      // const book = store.state.book
      // return book
      const book = {
        cover: 'hoge',
        author: 'API実装待ち',
        publisher: 'API実装待ち',
        title: 'API実装待ち'
      }
      return {
        book: book
      }
    }
  },
  data() {
    return {
      showBetafunctions: false
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
  color: $second-base-color
  border: none
  border-radius: 5px
  > i
    line-height: 2
    display: inline-block
    margin-right: 0.5rem

.button
  display: block
  margin: 0.5rem auto
  color: $second-base-color
  border: none
  text-align: center

  &.borrow
    display: inline-block
    background: $second-base-color
    border: $skyblue 1px solid
    border-radius: 5px
    box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
    color: $skyblue
    font-weight: bold
    height: 2.5rem
    margin: 1rem 0
    line-height: 2
    min-width: 15rem
    max-width: 20rem
    &:hover
      color: $second-base-color
      background: $skyblue
      transition: all 0.1s ease 0s


.borrowing-info
  > h4
    font-weight: bold
    padding-bottom: 0.2rem
    border-bottom: 2px $second-base-color solid


.borrowing-user
  text-align: center
  width: 10rem
  margin: 1rem 8rem 1rem 0
  text-decoration: none
  background: #273d6c
  border-radius: 2px
  color: $second-base-color
  box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
  cursor: pointer
  &:hover
    border: solid 1px $second-base-color
    box-sizing: border-box
</style>
