/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const Layout = ({ children, eventoId }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      evento(id: { eq: "Su0e3Iy0rXxBObnRYQvD" }) {
        nome
        cor
      }
    }
  `)

  return (
    <>
      <div>{console.log(data)}</div>
      <Header siteTitle={data.evento.nome} color={data.evento.cor} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{ background: `${data.evento.cor}` }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: `white`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
