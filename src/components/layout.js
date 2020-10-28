import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../assets/scss/style.scss"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className }) => {
  const { site } = useStaticQuery(query)

  return (
    <div className="primary-container">
      <main className={"container " + className}>{children}</main>
    </div>
  )
}

export default Layout
