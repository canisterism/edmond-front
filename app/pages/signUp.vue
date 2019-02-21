<template lang="pug">
section#signup
  .main-container.columns.is-vcentered.is-centered
    .message-container.column.is-10-mobile.is-7-tablet.is-6-desktop.is-4-fullhd
      h1 会員登録
      p Edmondを使うためには、Googleアカウントでの登録が必要です。
      firebaseAuth
      .line
      .login-button-area
        .login-button
          nuxt-link(to="login") ログインはこちら
</template>

<script>
import FirebaseAuth from '~/components/FirebaseAuth.vue'

export default {
  components: { FirebaseAuth }
}
</script>


<style lang="scss" scoped>
.main-container {
  height: 80vh;
}
.message-container {
  background: #4b6399;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  > h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.google-signup-button {
  background: white;
  color: grey;
  padding: 1rem;
  margin: 1rem auto;
  width: 80%;
  text-align: center;
}
.line {
  border: #c6c7d1 solid 1px;
  margin: 0.5rem;
}
.login-button-area {
  text-align: center;
}
.login-button {
  text-align: center;
  display: inline-block;
  background: #47b1df;
  direction: ltr;
  font-weight: 500;
  height: auto;
  line-height: normal;
  max-width: 220px;
  min-height: 40px;
  padding: 8px 16px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 1rem;

  > a {
    color: inherit;
    font-weight: bold;
  }
}
</style>
