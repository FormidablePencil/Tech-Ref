import React from 'react';
import "../styles/mystyles.css"
import Img from "gatsby-image"
import {Link} from "gatsby"

const index = ({data}) => {  //!*?  Images section
  return (
    <div className="container mx-auto">
    <Link to="/">index</Link>
    <br/>
    <Link to="/secondPage">secondPage</Link>
    <br/>
    <Link to="/thirdPage">thirdPage</Link>
      <div className="container">
          <Img fluid={data.someAbstract.childImageSharp.fluid} 
          className="h-48 2-full bg-gray-500"     
          imgStyle={{
            objectFit: "contain",
          }}/>                    {/* //* className can and should be used on Img but objectFit and objectPosition shouldn't. */}
      </div>
      <div className="container mx-auto h-64 bg-gray-100">
        <Img 
        fluid={data.coffy.childImageSharp.fluid}
        className="bg-gray-400" 
        imgStyle={{
        objectFit: "scale-down",
        objectPosition: "top right"
        }}  />
      </div>
      <div className="container "></div>
    </div>
  );
};

export const query = graphql`
  {
    someAbstract: file(relativePath: {eq: "someAbstract.jpg"}) {  
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coffy: file(relativePath: {eq: "coffy.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

export default index;