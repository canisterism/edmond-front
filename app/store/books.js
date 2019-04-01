// eslint-disable-next-line
import bookByTitle from '~/apollo/queries/bookByTitle'

export const state = () => ({
  books: [],
  searchWord: ''
})

export const getters = {
  books: state => state.books,
  searchWord: state => state.seachWord
}

export const mutations = {
  setBooks(state, { books }) {
    state.books = books
  },
  setSearchWord(state, { searchWord }) {
    state.searchWord = searchWord
  }
}

export const actions = {
  async search({ commit, state }, { searchWord }) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({ query: bookByTitle, variables: { title: searchWord } })
      .then(({ data }) => {
        commit('setBooks', { books: data.book_by_title })
      })
    await commit('setSearchWord', { searchWord })
  }
}
