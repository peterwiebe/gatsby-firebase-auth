import { createContext } from "react"
import * as firebase from "firebase/app"
import "firebase/auth"

import { errorResponse, userAuthParams, userUpdateParams } from "./interfaces"
import config from "./config"

class Firebase {
  private auth: any

  constructor() {
    firebase.initializeApp(config)
    this.auth = firebase.auth
  }

  get user() {
    return this.auth().currentUser
  }

  createUser({ email, password }: userAuthParams) {
    return this.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => res)
      .catch((err: errorResponse) => {
        throw err
      })
  }

  loginUser({ email, password }: userAuthParams) {
    return this.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => res)
      .catch((err: errorResponse) => {
        throw err
      })
  }

  logoutUser() {
    return this.auth()
      .signOut()
      .then((res: any) => res)
      .catch((err: errorResponse) => {
        throw err
      })
  }

  updateUserProfile({ displayName, photoURL }: userUpdateParams) {
    if (!this.user) {
      throw new Error("You are not logged in.")
    }

    return this.auth()
      .updateUserProfile({ displayName, photoURL })
      .then((res: any) => res)
      .catch((err: errorResponse) => {
        throw err
      })
  }
}

export const service = new Firebase()

export const AuthContext = createContext(null)

export default service
