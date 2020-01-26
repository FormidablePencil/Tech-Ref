//* We are going to learn how to pull data into Gatsby site with GraphQL.
//*   The combination of source plugins and transformer plugins can handle all data sourcing and data transformation you might need when building a Gatsby site.
//*   Data in Gatsby sites can come from anywhere: APIs, databases, CMSs, local files, etc.
//*   Source plugins fetch data from their source... I believe that means it can search our whole gatsby project.
//*   npm install --save gatsby-source-filesystem
//*   The go to gatsby-config and add a few things.
//*   node is a fancy word for {objects} in a "graph"
//*   Query request and retrieve data from database and information systems.
//*   The filesystem source plugin lets you query data ABOUT files but transformer pluggins lets you query data inside files. 
//*   npm install --save gatsby-transformer-remark       We are transforming this Markdown file to HTML using transformer plugins and GraphQL.
//*   configure the transformer pluggin in gatsby-config.js
//*   Source plugins bring data into Gatsby’s data system and transformer plugins transform raw content brought by source plugins. This pattern can handle all data sourcing and data transformation you might need when building a Gatsby site.
//*   
//? Now other questions arise with GraphQL:
//?   How would I select a spacific object of data?
//?   
//* You can sort and filter nodes, set how many nodes to skip, and choose the limit of how many nodes to retrieve. With this powerful set of operators, you can select any data you want—in the format you need.
//! Next is learning how to programmatically map out the queried data. After this what else is there you need to learn??? 

//? Break everything down, study it and watch a video explaining it.

import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import picture from "../images/pexels-photo-414612.jpeg"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (       //Another use of map()? Better get very used to map() because I'm going to be using this alot.
          <div key={node.id}>
          <Link
              to={node.fields.slug} //! What does this mean? This is where it directs you; the slug is the keyword sortasay. It works because we queried it into here.
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
//*                                                    We've sorted the posts from decending order of dates
export const query = graphql` 
  query { 
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`