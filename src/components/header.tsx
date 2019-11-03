import React, { useContext } from "react"
import { Link } from "gatsby"
import { AuthContext } from "../services/firebase"
interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: Props) => {
  const auth = useContext(AuthContext)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        {auth.user ? (
          <button onClick={auth.logoutUser}>Logout</button>
        ) : (
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
