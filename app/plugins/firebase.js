import firebase from 'firebase/app'
import 'firebase/auth'
const config = {
  apiKey: 'AIzaSyAfHHY0GsrcZ4IIGWUFnHp9191e0tS46NI',
  authDomain: 'eddie-117e6.firebaseapp.com',
  databaseURL: 'https://eddie-117e6.firebaseio.com',
  projectId: 'eddie-117e6',
  storageBucket: 'eddie-117e6.appspot.com',
  messagingSenderId: '1097970375016'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const authProvider = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID
}
export const auth = firebase.auth()
