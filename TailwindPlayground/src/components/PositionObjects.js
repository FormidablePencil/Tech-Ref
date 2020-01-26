import React from 'react';
import {graphql} from "gatsby"
import Img from "gatsby-image"

const ObjectfitNPosition = () => {
  return (
    <div>
      
    </div>
  );
};

export default ObjectfitNPosition;

export const query = graphql`
  query {
    image: file(relativePath: {eq: "123.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`