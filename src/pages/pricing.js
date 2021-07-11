import * as React from "react"
import '../styles/pricingStyle.css'
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'
import { login, logout, isAuthenticated, getProfile, getUsers } from "../utils/auth"

import Header from "../components/header"

import Logo from "../images/Logo.png"
import Progress from "../images/progress.png"

const percentage = 66;



const Pricing = () => {

  return (
    <html lang="en">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Designed to help you write first, edit later."></meta>
        <title>Qyll</title>
      </Helmet>
      <Header />
      {/* <p>Debugging but oh well {process.env.AUTH0_DOMAIN}</p> */}
      <br />
      <br />
      <br />
      <div class="pricing-content">
        <div class='some-page-wrapper'>
            <div class='row'>
                <div class='column'>
                    <div class="plan-header">
                        <h1>Free Plan</h1>
                        <h1>$0 /month</h1>
                        <div class="plan-features">
                            <ul>
                                <li>Qyll Page</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class='column'>
                <div class="plan-header">
                        <p>Premium</p>
                        <p>$3 /month</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </html>
  )
}

export default Pricing
