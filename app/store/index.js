export const state = () => ({
  user: ''
})

export const mutations = {
  setUser(state, { user }) {
    state.user = user
  }
}

export const actions = {
  login({ commit }, { user }) {
    commit('setUser', user)
  }
}
