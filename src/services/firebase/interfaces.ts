export interface userAuthParams {
  email: string
  password: string
}

export interface userUpdateParams {
  displayName: string
  photoURL: string
}

export interface errorResponse {
  code: string
  message: string
}
