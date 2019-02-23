/* eslint-disable prettier/prettier */
export default function ({ store, redirect }) {
  if (!store.state.user.length) {
    return redirect('/signUp')
  }
}
