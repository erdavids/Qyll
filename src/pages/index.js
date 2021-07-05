import * as React from "react"
import '../styles/mainStyle.css'
import { Link } from "gatsby"

import Logo from "../images/Logo.png"

const percentage = 66;
// markup
const IndexPage = () => {

  return (
    <>

      <div class="fullStyle">
        <div class="content">
          <h1 class="logo">
            <img class="logo-image" src={Logo} />
            <span class="qyll-title">Qyll</span>
          </h1>
          <p class="description">Designed to help you write, not edit.</p>
          <Link to="/page"><button class="try-button">Try it</button></Link>
        </div>
      </div>
    </>
  )
}

export default IndexPage
