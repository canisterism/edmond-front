<template lang="pug">
  div#firebaseui-auth-container
</template>

<script>
import { auth, authProvider } from '~/plugins/firebase'

export default {
  name: 'Login',
  mounted() {
    if (process.browser) {
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
      const config = {
        signInOptions: [authProvider.Google],
        signInSuccessUrl: '/',
        callbacks: {
          signInSuccessWithAuthResult: function(authResult) {
            // eslint-disable-next-line no-console
            console.log(authResult)
          }
        },
        signInFlow: 'popup'
      }
      ui.start('#firebaseui-auth-container', config)
    }
  }
}
</script>

<style src='firebaseui/dist/firebaseui.css'>
</style>
