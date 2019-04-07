<template>
  <section class>
    <div class>
      <div class="book-info">
        <div class="published_by">{{ book.publisher }}</div>
        <div class="title">{{ book.title }}</div>
        <div class="author">{{ book.author }}</div>
        <div class="cover">
          <img :src="book.cover" alt>
        </div>
        <div v-if="showBetafunctions">
          <div class="status">
            <i class="fas fa-check"></i>貸出可
          </div>
          <div class="button borrow" @click="onClickBorrow()">借りる(未実装です)</div>
          <div class="borrowing-info">
            <h4>借りている人</h4>
            <ul class="borrowing-users">
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

<style lang="scss" scoped>
.book-info {
  margin: 2rem auto 0;
  box-sizing: border-box;
  width: 60%;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
}
.published_by {
  font-size: 0.75rem;
}
.author {
  font-size: 0.75rem;
}
.title {
  font-size: 1.5rem;
}
.cover {
  text-align: center;
  display: inline-block;
  margin: 2rem 0;
  @media screen and (max-width: 480px) {
    margin: 1rem 0;
  }
}

.status {
  width: 7rem;
  background: #0f95ce;
  text-align: center;
  display: block;
  color: white;
  border: none;
  border-radius: 5px;

  > i {
    line-height: 2;
    display: inline-block;
    margin-right: 0.5rem;
  }
}

.button {
  display: block;
  margin: 0.5rem auto;
  color: white;
  border: none;
  text-align: center;

  &.borrow {
    display: inline-block;
    background: white;
    border: #0f95ce 1px solid;
    border-radius: 5px;
    box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #0f95ce;
    font-weight: bold;
    height: 2.5rem;
    font-size: 1.2rem;
    margin: 1rem 0;
    line-height: 2;
    min-width: 15rem;
    max-width: 20rem;
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
  text-align: center;
  width: 10rem;
  margin: 1rem 8rem 1rem 0;
  text-decoration: none;
  background: #273d6c;
  border-radius: 2px;
  font-size: 1.2rem;
  color: white;
  box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  cursor: pointer;
  &:hover {
    border: solid 1px white;
    box-sizing: border-box;
  }
}
</style>
