import * as React from "react"
import '../styles/headerStyle.css'
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'

import Logo from "../images/Logo.png"

const percentage = 66;

const Header = () => {

  return (
    <html lang="en">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Designed to help you write, not edit."></meta>
        <title>Qyll</title>
      </Helmet>
        <nav class="header">
            <span class="page-logo">
                <Link to="/"><img class="page-logo-image" alt="Qyll logo"  src={Logo} /></Link>
                <Link to="/"><span class="page-logo-title">Qyll</span></Link>
            </span>
            <Link to="/blog/qyll-v0-5"><button class="try-button-header login-top-link">Try it</button></Link>
            {/* <Link to="/pricing"><button class="hidden-button login-top-link">Pricing</button></Link> */}
            <Link to="/blog/qyll-v0-5"><button class="hidden-button login-top-link">Features</button></Link>
            <Link to="/blog"><button class="hidden-button login-top-link">Blog</button></Link>

        </nav>
    </html>
  )
}

export default Header
