import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;

`

const HeaderDate = styled.h4`
  margin-top: 10px;
  color: #FACEE2;
  opacity: 50%;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    color: #FACEE2;
    text-decoration: none;
    position: relative;


    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
  h1 {
    font-size: 2.4em;
    color: #FACEE2;
    text-shadow: 0px 2px 2px #111;
  }
  h2 {
    font-size: 2.1em;
    text-shadow: 0px 2px 2px #111;
    color: #FACEE2;
  }
  h3 {
    font-size: 1.8em;
    text-shadow: 0px 2px 2px #111;
    color: #FACEE2;
  }
  h4 {
    font-size: 1.65em;
    text-shadow: 0px 2px 2px #111;
    color: #FACEE2;
  }
  h5 {
    font-size: 1.55em;
    text-shadow: 0px 2px 2px #111;
    color: #FACEE2;
  }
  h6 {
    font-size: 1.45em;
    text-shadow: 0px 2px 2px #111;
    color: #FACEE2;
  }
  b {
    color: #FACEE2;
  }

`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
          <div className="blogEntry">
        <MarkedHeader className="blog">{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
          <p style={{opacity:"70%"}}>Tags: <span className="blog">{post.frontmatter.tags}</span></p>
        </div>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link to="/blog" className="blog"><h3>(back to blog)</h3></Link>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
