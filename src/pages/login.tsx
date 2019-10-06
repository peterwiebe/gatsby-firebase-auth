import React, { useCallback, useContext, useState } from "react"
import { AuthContext } from "../services/firebase"

import Layout from "../components/layout"
import SEO from "../components/seo"

const intialFormState = {
  email: "",
  password: "",
}

const Login = () => {
  const auth = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [{ email, password }, setCredentials] = useState(intialFormState)
  const [errorMessage, setErrorMessage] = useState()

  const login = () => {
    setIsLoading(true)
    setErrorMessage("")

    auth
      .createUser({ email, password })
      .then((res: Promise<any>) => {
        console.log(res)
        setIsLoading(false)
      })
      .catch((err: any) => {
        console.log(err)
        setIsLoading(false)
        setErrorMessage(err.message)
      })
  }

  const change = useCallback(({ target: { name, value } }) => {
    setCredentials(prevState => ({ ...prevState, [name]: value }))
  }, [])

  return (
    <Layout>
      <SEO title="Login" />
      <h1>Login</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "1rem",
          maxWidth: "12rem",
        }}
      >
        <input type="email" name="email" value={email} onChange={change} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={change}
        />
        <button onClick={login}>Register</button>
        {isLoading && `...Loading`}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </Layout>
  )
}

export default Login
