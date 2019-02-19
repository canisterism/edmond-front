import firebase from 'firebase'
// Initialize Firebase
if (!firebase.app.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAfHHY0GsrcZ4IIGWUFnHp9191e0tS46NI',
    authDomain: 'eddie-117e6.firebaseapp.com',
    databaseURL: 'https://eddie-117e6.firebaseio.com',
    projectId: 'eddie-117e6',
    storageBucket: 'eddie-117e6.appspot.com',
    messagingSenderId: '1097970375016'
  })
}

export default firebase
