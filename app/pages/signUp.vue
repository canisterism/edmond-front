<template lang="pug">
section#signup
  .main-container.columns.is-vcentered.is-centered
    .message-container.column.is-10-mobile.is-7-tablet.is-6-desktop.is-4-fullhd
      h1.font-xlarge 会員登録
      p Edmondを使うためには、Googleアカウントでの登録が必要です。
      .google-signup-button Googleアカウントで登録する(仮)
      .line
      .login-button
        nuxt-link(to="login") ログインはこちら
</template>

<script>
export default {}
</script>


<style lang="sass" scoped>
.main-container
  height: 80vh

.message-container
  background: #4b6399
  padding: 2rem
  @media screen and (max-width: 768px)
    margin: 0 auto

  > h1
    font-weight: bold

.google-signup-button
  background: $second-base-color
  color: grey
  padding: 1rem
  margin: 1rem auto
  width: 80%
  text-align: center

.line
  border: #c6c7d1 solid 1px
  margin: 0.5rem

.login-button
  background: #47b1df
  color: $second-base-color
  padding: 1rem
  margin: 1rem auto
  width: 80%
  text-align: center
  border-radius: 5px
  > a
    color: inherit
    font-weight: bold


</style>
