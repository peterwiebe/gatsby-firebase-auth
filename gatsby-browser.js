/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { AuthContext } from "./src/services/firebase"

// TODO: fix typo on ROOOOT
const wrapRoootElement = ({ element }) => (
  <AuthContext.Provider>{element}</AuthContext.Provider>
)

export { wrapRoootElement }
