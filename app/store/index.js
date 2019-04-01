export const state = () => ({
  user: ''
})

export const mutatinons = {
  setUser(state, { user }) {
    state.user = user
  }
}

export const actions = {
  login({ commit }, { user }) {
    commit('setUser', user)
  }
}
