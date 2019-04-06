<template>
  <section class="columns is-centered">
    <div class="column is-half">
      <div class="cover">
        <img :src="book.cover" alt>
      </div>
      <div class="book-info">
        <div class="book-summary">
          <div class="is-size-4">{{ book.title }}</div>
          <div class="author is-size-6">{{ book.author }}</div>
          <div class="published_by is-size-6">{{ book.publisher }}</div>
        </div>

        <div class="status button">貸出可</div>
        <div class="borrow button is-primary">借りる</div>
        <div class="borrowing-info">
          <h4>借りている人</h4>
          <ul class="borrowing-users">
            <li class="borrowing-user">
              <nuxt-link to="/user/1">
                <span class="icon">○</span>
                <span>otani</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData({ store, params }) {
    // fixme: 条件は逆のほうが読みやすい
    // fixme: bookByIsbn実装されたらコメントアウト解除
    if (!store.state.books) {
      // await store.dispatch('books/searchByIsbn', { isbn: params.isbn })
      // const book = store.state.book
      // return book
      const book = {
        cover: 'hoge',
        auhor: 'API実装待ち',
        publisher: 'API実装待ち',
        title: 'API実装待ち'
      }
      return {
        book: book
      }
    } else {
      return {
        book: store.getters['books/bookByIsbn'](parseInt(params.isbn))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  width: 100%;
  margin: 3rem auto 0;
  text-align: center;
}
.book-info {
  width: 70%;
  margin: 2rem auto 0;
  box-sizing: border-box;
}
.author {
}
.published_by {
}

.button {
  display: block;
  margin: 0.5rem auto;
  color: white;
  border: none;

  &.status {
    width: 20%;
    margin-left: 0;
    background: #20a310;
  }
  &.borrow {
    background: white;
    border: #0f95ce 1px solid;
    border-radius: 5px;
    box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #0f95ce;
    font-weight: bold;
    height: 2.5rem;
    font-size: 1.2rem;
    margin: 1rem 9rem 1rem 0;
    &:hover {
      color: white;
      background: #0f95ce;
      transition: all 0.1s ease 0s;
    }
  }
}

.borrowing-info {
  > h4 {
    font-weight: bold;
    padding-bottom: 0.2rem;
    border-bottom: 2px white solid;
  }
}

.borrowing-user {
  width: 20%;
  margin: 1rem 8rem 1rem 0;
  text-decoration: none;
  background: white;
  border-radius: 2px;
  font-size: 1.2rem;
}
</style>
