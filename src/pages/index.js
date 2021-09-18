import * as React from "react"
import '../styles/mainStyle.css'
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'

import Header from "../components/header"

import Logo from "../images/Logo.png"
import Progress from "../images/progress.png"
import WriterImage from "../images/Qyll-Crop.png"

const IndexPage = () => {

  return (
    <html lang="en">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Designed to help you write first, edit later."></meta>
        <title>Qyll</title>
      </Helmet>
      <Header />
      <div class="fullStyle">
        <div class="content">

          <div class="flex-grid-container">
            <div class="flex-col">
              <h1 class="action-statement">Reach your writing goals.</h1>
              <p class="app-description">Qyll will help you finish your first draft
instead of rewriting the first page... again.</p>
              <p class="app-description">Most writers get stuck in an endless cycle of editing. Using Qyll, you can't edit what you've written until you hit your word goal.</p>
              <div class="app-buttons">
                <Link to="/page"><button class="try-button">Try It</button></Link>
                {/* <Link to="/edit"><button class="try-button">Edit</button></Link> */}
                <br />
                <a href="https://thebuffed.gumroad.com/l/qyll-writing"><button class="read-button">Desktop App</button></a>
              </div>
              
            </div>
            <div class="flex-col"><img class="writer-image" alt="Woman writing with a quill" src={WriterImage} /></div>
          </div>
        </div>
      </div>

    </html>
  )
}

export default IndexPage
