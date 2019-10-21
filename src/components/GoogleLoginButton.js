import React, { useContext } from "react"
import GoogleButton from "react-google-button"

import FirebaseContext from "../utils/FirebaseContext"
import AuthContext from "../utils/AuthContext"

export default function Login() {
  const Firebase = useContext(FirebaseContext)

  const { setAuthUser, authUser } = useContext(AuthContext)

  if (authUser !== "") {
    return (
      <button
        onClick={() => {
          Firebase.doSignOut()
            .then(setAuthUser(""))
            .catch(e => console.error(e))
        }}
      >
        Sign Out
      </button>
    )
  } else {
    return (
      <>
        <GoogleButton
          type="light"
          label="Login"
          onClick={() => {
            Firebase.doSignInWithGoogle()
              .then(result => setAuthUser(result.user.uid))
              .catch(e => console.error(e))
          }}
        />
      </>
    )
  }
}
