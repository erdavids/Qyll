import * as React from "react"
import '../styles/headerStyle.css'
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

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
            <button class="header-button login-top-link">Try it</button>
            { !isAuthenticated() ?
                <button onClick={login} class="hidden-button login-top-link">Sign in</button>
                :
                <></>
            }
            <button class="hidden-button login-top-link">Pricing</button>
            <button class="hidden-button login-top-link">Features</button>
            <button class="hidden-button login-top-link">About</button>
        </nav>
    </html>
  )
}

export default Header
