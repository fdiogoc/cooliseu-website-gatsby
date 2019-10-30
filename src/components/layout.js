import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "../assets/scss/main.scss"

import Header from "./Header"
import Footer from "./Footer"

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
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
