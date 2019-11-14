/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { AuthContext, service } from "./src/services/firebase"

export const wrapRootElement = ({ element }) => (
  <AuthContext.Provider value={service}>{element}</AuthContext.Provider>
)
