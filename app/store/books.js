// eslint-disable-next-line
import bookByTitle from '~/apollo/queries/bookByTitle'
import bookByIsbn from '~/apollo/queries/bookByIsbn'

export const state = () => ({
  books: [],
  book: {},
  searchWord: '',
  isbn: ''
})

export const getters = {
  books: state => state.books,
  searchWord: state => state.searchWord,
  bookByIsbn: state => isbn => {
    return state.books.find(book => {
      return book.isbn === isbn
    })
  }
}

export const mutations = {
  setBooks(state, { books }) {
    state.books = books
  },
  setBook(state, { book }) {
    state.book = book
  },
  setSearchWord(state, { searchWord }) {
    state.searchWord = searchWord
  },
  setIsbn(state, { isbn }) {
    state.isbn = isbn
  }
}

export const actions = {
  async searchByTitle({ commit, state }, { searchWord }) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({ query: bookByTitle, variables: { title: searchWord } })
      .then(({ data }) => {
        commit('setBooks', { books: data.book_by_title })
      })
    await commit('setSearchWord', { searchWord })
  },
  async searchByIsbn({ commit, state }, { isbn }) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({ query: bookByIsbn, variables: { isbn: isbn } })
      .then(({ data }) => {
        commit('setBook', { books: data.book_by_isbn })
      })
    await commit('setIsbn', { isbn })
  }
}
