import firebase from 'firebase'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAfHHY0GsrcZ4IIGWUFnHp9191e0tS46NI',
  authDomain: 'eddie-117e6.firebaseapp.com',
  databaseURL: 'https://eddie-117e6.firebaseio.com',
  projectId: 'eddie-117e6',
  storageBucket: 'eddie-117e6.appspot.com',
  messagingSenderId: '1097970375016'
}

// ダメなのは分かっているが動かないので後で直す
try {
  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
  // eslint-disable-next-line prettier/prettier
} catch { }
const fb = firebase
export default fb
