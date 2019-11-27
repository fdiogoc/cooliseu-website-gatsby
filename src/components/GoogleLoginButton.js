import React, { useContext } from "react"
import { Link } from "gatsby"
import GoogleButton from "react-google-button"

import FirebaseContext from "../utils/FirebaseContext"
import AuthContext from "../utils/AuthContext"

export default function Login() {
  const Firebase = useContext(FirebaseContext)

  const { setAuthUser, authUser } = useContext(AuthContext)

  if (authUser !== "") {
    return (
      <ul>
        <li>
          <Link to="/page-2/" className="button special">
            {" "}
            Agendar
          </Link>
        </li>
        <li>
          {" "}
          <button
            onClick={() => {
              Firebase.doSignOut()
                .then(setAuthUser(""))
                .catch(e => console.error(e))
            }}
          >
            Deslogar
          </button>
        </li>
      </ul>
    )
  } else {
    return (
      <>
        <GoogleButton
          type="light"
          label="Logar"
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
