import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.p`
  display: inline;
  color: #FACEE2;
  opacity: 80%;
  font-size: 0.9em;
`

const Tags = styled.p`
  opacity: 50%;
`

const MarkerHeader = styled.h2`
  display: inline;
  border-radius: 1em 0 1em 0;
  color: #FACEE2;
`

const ReadingTime = styled.p`
  display: inline;
  opacity: 40%;
  font-size: 0.9em;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
        <h1 className="blog">blog</h1>
        <p>This is where I'll post blog posts, slowly but surely!</p>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id} className="blogEntry">
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                  <MarkerHeader> {node.frontmatter.title} </MarkerHeader>
                <div>
                    <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                    <Tags><b>Tags:</b> <span className="blog">{node.frontmatter.tags}</span></Tags>
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            tags
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
