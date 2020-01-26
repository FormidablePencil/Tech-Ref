import React from 'react';
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'     
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import styled from "@emotion/styled"


const BackgroundTransparent = styled.div`
  background-color: rgba(0,0,0,.2);
`
const CardsPage = ({data}) => { //* These are the bulma prebuild components I'll use very often with bulma.
return ( 
    <>
      <BackgroundImage fluid={data.backgroundImg.childImageSharp.fluid}>
      <BackgroundTransparent>

      <div className="container">
        
      <div className="section"> {/* //* There are multiple styles of breadcrumbs to choose from with bulma */}
          <div className="has-background-warning box">
            <nav className="breadcrumb is-centered is-small" arial-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/ComponentsWebsite">
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faCubes} />
                  </span>
                  ComponentsWebsite
                  </Link>
                </li>
                <li className="is-active">
                  <Link to="/ComponentsWebsite">
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faPuzzlePiece} />
                  </span>
                  Cards
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="columns is-centered">
          <div className="column is-4 ">
          
            <div className="card">                  {/* //* Card */}
              <div className="card-image">
                <figure className="image">
                      <Img fluid={data.blueRoseFluid.childImageSharp.fluid} />     
                      {/* //! The way to change the image from cover to fill or something else is through Emotion. */}
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image ">
                      <Img fixed={data.blueRoseFixed.childImageSharp.fixed} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4 has-text-black">Dennis Aleksandrov</p>
                    <p className="subtitle is-6">@Instagram</p>
                  </div>
                </div>
                
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint deleniti dolorem aspernatur blanditiis illum saepe soluta alias, sapiente, vero quae commodi atque est! Praesentium cupiditate itaque sequi quisquam accusamus.
                  <Link to="/ComponentsWebsite">@YourMother</Link>
                  <Link to="/ComponentsWebsite">#css</Link>
                  <Link to="/ComponentsWebsite">#responsive</Link>
                  <br />
                  <time datetime="2019-10-31">4:07 AM - 31 Oct 2019</time>
                </div>
              </div>
            </div>
            
          </div>
        </div> 
        
        <div className="columns is-centered">
          <div className="column is-5">

            <div className="card">                {/* //* Cards */}
              <header className="card-header">
                <span className="card-header-title">
                  Component
                </span>
                <span class="card-header-icon" aria-label="more-options">
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </span>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias illum nostrum, temporibus sint perspiciatis error eos asperiores ut aperiam repudiandae recusandae et explicabo tempore culpa veritatis saepe facilis aut fugit.
                  <Link>@Bulma</Link>
                  <Link>#css</Link>
                  <Link>#responsive</Link>
                  <br />
                  <time datatime="2019-31-10">12:25 PM - 31 Oct 2019</time>
                </div>
              </div>
              <footer className="card-footer">
                <Link className="card-footer-item">Save</Link>
                <Link className="card-footer-item">Edit</Link>
                <Link className="card-footer-item">Delete</Link>
              </footer>
            </div>
            
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-6">
          {/* //*"Card" behaves like a "box" */}
            <div className="card"> {/* //* This is the div that that encomposes the whole card component. */}
              <div className="card-content">      {/* //* The content of the card. */}
                <p className="title has-text-black">
                “The definition of insanity is doing the same thing over and over again and expecting different results.” 
                </p>
                <p className="subtitle">~Albert Einstein</p>
                <footer className="card-footer"> {/* //* The footer of the card. */}
                  <p className="card-footer-item">
                    <span>
                      View on <Link to="/">Twitter</Link>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    <span>
                      Share on <Link to="/">Facebook</Link>
                    </span>
                  </p>
                </footer>
              </div>
            </div>

          </div>
        </div>
      </div>

      </BackgroundTransparent>
      </BackgroundImage>
      </>
  );
};

export const query = graphql`
{
  backgroundImg: file(relativePath: {eq: "abstraction.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  blueRoseFluid: file(relativePath: {eq: "blue-rose.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  blueRoseFixed: file(relativePath: {eq: "blue-rose.png"}) {
    childImageSharp {
      fixed(width:50) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

export default CardsPage