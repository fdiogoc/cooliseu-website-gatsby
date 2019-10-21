import React from "react"

import FirebaseContext from "./src/utils/FirebaseContext"
import AuthContextProvider from "./src/components/AuthContextProvider"

import Firebase from "./src/services/firebase"

export const wrapRootElement = ({ element }) => (
  <FirebaseContext.Provider value={new Firebase()}>
    <AuthContextProvider>{element}</AuthContextProvider>
  </FirebaseContext.Provider>
)
