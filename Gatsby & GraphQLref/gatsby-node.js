//? Lets break this down into little peices and then watch a tutorial on this.
//! All of these words seem like reserved keywords.
 

const path = require(`path`)                                          //! what does this mean?
const { createFilePath } = require(`gatsby-source-filesystem`)        //! what does this mean?
exports.onCreateNode = ({ node, getNode, actions }) => {   
  const { createNodeField } = actions                                 //! What does this mean?
  if (node.internal.type === `MarkdownRemark`) {                      // if the node is a markdown then console.log
    const slug = createFilePath({ node, getNode, basePath: `pages` }) //! What does this mean?
    createNodeField({                                                 //* We've set the createNodeFile to = an action. 
      node,
      name: `slug`,
      value: slug,
    })      
    }
}                                                                     //* I think that whole section of code was just in creating a slug.

//*                                                                       To make sure that the result of the query comes back before continuing, use async/await.
exports.createPages = async ({ graphql, actions }) => { //? So do we pass in something within these parameter, I don't think so because there are {} but from where are they coming from. There is no imports at all.
  // **Note:** The graphql function call returns a Promise
  //* see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions //! What does actions do?
  const result = await graphql(` 
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {    //* data is the graphql query up above. So for each node execute the block of code.
    createPage({                                                 //* createPages is Gatsby's node API (whatever that means) that creates a page out of a React component that is not spacifically within the pages directory. 
      path: node.fields.slug,                                    //* path is where you want the website to be url wise.
      component: path.resolve(`./src/templates/blog-post.js`),   //* compoent: means what we are talking about here and path.resolve is reaching out to get the the file.
      context: {                                 //* What goes into here is what we want to personally add as content; title, author, etc.
        // Data passed to context is available 
        // in page queries as GraphQL variables.
        slug: node.fields.slug,                  //* this "exposes" everything in context as a GatsbyQL variable.
      },
    })
  }) 
} // Summary of what we've done. We've get the required data through graphQL and then we taking all the nodes with the help of grapgQL and set it to a templating component, set it a slug and set a slug within the context so it could be accessed via prop in the templating side of the deal. This is still a little confusing to me.

//! This looks like backend stuff. I guess I'll have to learn more programming vocabulary to understand this. That's what's next!