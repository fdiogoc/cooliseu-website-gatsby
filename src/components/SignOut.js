import React, { useContext } from "react"

import FirebaseContext from "../utils/FirebaseContext"

const SignOutButton = ({ firebase }) => {
  const Firebase = useContext(FirebaseContext)
  return (
    <button type="button" onClick={Firebase ? Firebase.doSignOut : () => {}}>
      Sign Out
    </button>
  )
}

export default SignOutButton
