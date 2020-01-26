//* In this part of the tutorial, you’ve learned the foundations of building with Gatsby’s data layer. You’ve learned how to source and transform data using plugins, how to use GraphQL to map data to pages, and then how to build page template components where you query for data for each page.
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"  //This is the template for the md files pandas... & sweet....

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {data.image}
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>    
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
//We've "programmed" the slug onto the markdown files but usually external cites should have a slug with the data.         //!  This I get for the most part. 