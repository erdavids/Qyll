import * as React from "react"
import '../styles/mainStyle.css'
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

import Header from "../components/header"

import Logo from "../images/Logo.png"

const percentage = 66;

const IndexPage = () => {

  return (
    <html lang="en">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Designed to help you write first, edit later."></meta>
        <title>Qyll</title>
      </Helmet>
      <Header />
      <p>Debugging but oh well {process.env.AUTH0_DOMAIN}</p>
      <div class="fullStyle">
        <div class="content">
          <h1 class="logo">
            <img class="logo-image" alt="Qyll logo" src={Logo} />
            <span class="qyll-title">Qyll</span>
          </h1>
          <p class="description">Designed to help you write first, edit later.</p>
          <Link to="/page"><button class="try-button">Try it</button></Link>
        </div>
      </div>
    </html>
  )
}

export default IndexPage
