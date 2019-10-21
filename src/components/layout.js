import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


import Header from "./header"
import "./layout.css"

import { useSiteMetaData } from "../hooks/use-site-metadata"

import { Container as BaseContainerStyles } from "../styledComponents/layout"

const Container = styled(BaseContainerStyles)`
  padding-top: 0;
`

const Layout = ({ children }) => {
  const { nome, cor } = useSiteMetaData()

  return (
    <>
      <Header siteTitle={nome} color={cor} />
      <Container>
        <main>{children}</main>
      </Container>

      <footer style={{ background: `${cor}` }}>
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
