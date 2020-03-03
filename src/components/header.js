import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {colors, lcolors} from "./colors"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
  color: #fff;
`
const SiteHeader = styled.header`
  background-image: linear-gradient(#323232, rgba(22, 24, 26, 0));
  display: flex;
  align-content: center;
  justify-content: center;
`


const Header = (props) => (
  <SiteHeader>
    <Content>
      <p className = "nav">
          <Link to="/" id="homeLink" className="navLink" activeClassName="activeNav">home</Link>
        <Link to="/about" id="aboutLink" className="navLink" activeClassName="activeNav">about</Link>
        <Link to="/projects" id="projectsLink" className="navLink" activeClassName="activeNav">projects</Link>
          <Link to="/blog" id="blogLink" className="navLink" activeClassName="activeNav" partiallyActive={true}>blog</Link>
          <Link to="/contact" id="contactLink" className="navLink" activeClassName="activeNav">contact</Link>
          <Link href="https://github.com/chrisp1877" id="ghLink" className="navLink">
          github
        </Link>
      </p>
    </Content>
  </SiteHeader>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
