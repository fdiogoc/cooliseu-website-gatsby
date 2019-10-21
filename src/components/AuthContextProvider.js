import React, { useState, useEffect } from "react"
import AuthContext from "../utils/AuthContext"

const useStateWithLocalStorage = localStorageKey => {
  const [authUser, setAuthUser] = useState(
    localStorage.getItem(localStorageKey) || ""
  )

  useEffect(() => {
    console.log("authUser use effect    " + authUser)

    localStorage.setItem(localStorageKey, authUser)
  }, [authUser])

  return [authUser, setAuthUser]
}

export default function AuthContextProvider(props) {
  const [authUser, setAuthUser] = useStateWithLocalStorage("authUserUid")
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}
