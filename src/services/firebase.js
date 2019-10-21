import * as firebase from "firebase"

import "firebase/firebase-app"
import "firebase/firebase-auth"
import "firebase/firebase-firestore"

const config = {
  apiKey: "AIzaSyC5m8jKKZe5Mu969fTaJyxDAYxcCceIO_4",
  authDomain: "teste-react-admin.firebaseapp.com",
  databaseURL: "https://teste-react-admin.firebaseio.com",
  projectId: "teste-react-admin",
  storageBucket: "teste-react-admin.appspot.com",
  messagingSenderId: "278255466390",
}

class Firebase {
  constructor() {
    firebase.initializeApp(config)

    this.store = firebase.firestore()
    this.auth = firebase.auth()

    this.googleProvider = new firebase.auth.GoogleAuthProvider()
    this.facebookProvider = new firebase.auth.FacebookAuthProvider()
    this.twitterProvider = new firebase.auth.TwitterAuthProvider()

    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: new firebase.auth.GoogleAuthProvider(),
    }
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.GATSBY_CONFIRMATION_EMAIL_REDIRECT,
    })

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then(snapshot => {
            const dbUser = snapshot.val()

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {}
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            }

            next(authUser)
          })
      } else {
        fallback()
      }
    })

  get participantes() {
    return this.store.collection("participantes")
  }
}

export default Firebase
