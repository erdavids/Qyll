import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import "../styles/blogStyle.css"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink class="post-link" key={edge.node.id} post={edge.node} />)


    return (
        <>
            <Header />
            <div class="blog-content">
                <h1 class="blog-title">The Blog.</h1>
                <p>Thoughts on writing and Qyll development.</p>

                <h2 class="blog-list">Latest Posts.</h2>
                <div class="blog-list">{Posts}</div>
            </div>
        </>
    )


}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM D")
            slug
            title
          }
        }
      }
    }
  }
`