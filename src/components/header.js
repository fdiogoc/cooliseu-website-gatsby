import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Container as BaseContainerStyles } from "../styledComponents/layout"

import GoogleIcon from "./Icons/Google"
import GoogleButton from "../components/GoogleLoginButton"

const Container = styled(BaseContainerStyles)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderContainer = styled.header`
  ${props => props.background};
  margin-bottom: 1.45rem;
`

const Heading1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledGoogleButton = styled(GoogleButton)`
  width: 115px;
`

const BACKGROUND = "background-color: #20232a"

const Header = ({ siteTitle, background }) => (
  <>
    <HeaderContainer background={background}>
      <Container>
        <Heading1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Heading1>
        <StyledGoogleButton></StyledGoogleButton>
      </Container>
    </HeaderContainer>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  background: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  background: BACKGROUND,
}

export default Header
