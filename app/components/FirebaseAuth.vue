<template lang="pug">
  div#firebaseui-auth-container
</template>

<script>
import fb from '~/plugins/firebase'
import 'firebase/auth'

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [fb.auth.GoogleAuthProvider.PROVIDER_ID]
}

export default {
  mounted() {
    if (process.browser) {
      require('firebaseui/dist/firebaseui.css')
      const firebaseui = require('firebaseui')
      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(fb.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
}
</script>
