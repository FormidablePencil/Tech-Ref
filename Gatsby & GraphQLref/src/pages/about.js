import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => ( //data is what was "queried" in using graphql. In this case the source of data lies in gatby-config.js. That's like main place in which you would store static data.
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)
//* This would be an example of a query. It requests and retrieves data from database and information systems. 
export const query = graphql` 
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
//Page queries live outside of the component definition — by convention at the end of a page component file — and are only available on page components.