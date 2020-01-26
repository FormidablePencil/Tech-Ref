import React from "react"
import "../scss/myStyles.sass" //this applies to absolutely every component.
import {graphql} from "gatsby"
import styles from "../scss/container.module.sass" //* we can use modules as an encapsulating div.
import {Link} from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'           //* BackgroundImage here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const ContainersWebsite = ({data}) => ( //* My goal for practicing bulma is to make it a muscule memroy with when to use what and how to use it. Therefore expereimenting and getting hands on is the best in cementing bulma into my subconscious.
  <>
    <div className={styles.body}>         
      <BulmaContainersAndSuch 
      img={data.image.childImageSharp.fluid}
      imgFixed={data.image.childImageSharp.fixed}
      backgroundImage={data.backgroundImage.childImageSharp.fluid}
      profileImage={data.profileImage.childImageSharp.fluid}
      />
    </div>
  </>
)

export const query = graphql`
  {
    image: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        fixed(width:50, height:50) {
          ...GatsbyImageSharpFixed
        }

      }
    }
    backgroundImage: file(relativePath: {eq: "Creative-Geometry.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profileImage: file(relativePath: {eq: "cat.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContainersWebsite

const BulmaContainersAndSuch = ({imgFixed, img, backgroundImage, profileImage}) => ( //https://bulma.io/documentation/columns/options/ the documentation reference.
  <>
    <BackgroundImage
    Tag="section"
    fluid={backgroundImage}
    backgroundColor={`#040e18`}
    >       
      <div className="container"> {/* "container" adds margins to their left and right side and they change depending on the screen. */}

        <div className="level has-background-light"> {/* in mobile screen the levels stack horizantally */}
          <div className="level-left has-background-grey-lighter"> {/* //* Levels are simpler to create for simple things. You would avoid ofsetting and just say level-left and level-right. */}
            <div className="level-item">
              <Link to="/" className="link is-info is-size-2"><FontAwesomeIcon icon={faHome}/></Link>
            </div>
            <div className="level-item">
              <Link to="/" className="link is-info is-size-2">Store</Link>
            </div>
          </div>

          <div className="level-right has-background-grey-lighter">
              <div className="level-right">
                <div className="level-item is-size-2">
                  <Link to="/" className="link">Goody</Link> {/* You can't change the orders around level within levels, I've tried. Levels class is literally going levels down; box inside of a box but doesn't go any further than 2 levels so it's not ideal for creating a layout. It's used for manutia.  */}
                </div>
              </div>
              <div className="level-left">
                <div className="level-item is-size-2">
                  <Link to="/" className="link is-info">Howdoyoudo!</Link>
                </div>
              </div>
          </div>
        </div>
      </div>

      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <Img fixed={imgFixed} />
              <p>hero is-medium is-bold</p>
              <Link to="/ElementsWebsite">Elements Website</Link>
              <br />
              <Link to="/NavigationPgPrebuiltComp">Components Website</Link>
            </h1>
          </div>
        </div>
      </section>

      <div className="section has-background-light">
        <div className="container"> {/* adds margins to the left and the right side and also changes in width according to the screen. */}
          <p className="is-family-monospace">Section... Notice the margins that centered this text. <strong>is-family-monospace</strong></p>
        </div>
      </div>

      <div className="section ">
        <div className="columns is-mobile is-multiline is-centered"> {/* is-mobile makes is so the columns didn't stack on top of one another when on mobile view. */}
          <div className="column is-two-thirds has-background-danger has-text-centered ">
            <p className="has-text-white is-size-5 has-text-weight-bold">is-two-thirds & "columns is-mobile is-centered"</p>
            <div className="columns"> {/* //* With columns you can add columns inside columns. Though now I wonder what's the point of levels. */}
              <div className="column is-two-thirds">is-one-third. Columns inside of columns</div>
              <div className="column is-1 has-background-grey">is-1</div>
            </div>
          </div>
          <div className="column is-one-fifth has-background-info has-text-white">
            <p className="is-family">Just "columns" is-auto.</p>
          </div>
          <div className="column is-three-quarters has-background-warning">className="columns is-multiline"</div>
        </div>

        <div className="columns">
          <div className="column is-half has-background-success has-text-white">
            <p>No matter the screen size this'll always be offset-one-quarter & is-half. </p>
          </div>
          <div className="column is-narrow is-offset-1 has-background-primary has-text-white">
            <p>is-narrow to take up only needed space</p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-1-desktop is-offset-7-desktop is-one-third-tablet is-offset-2-tablet has-background-warning">
            <p>is-one-third-tablet is-offset-2-tablet</p> 
            <p>is-1-desktop is-offset-7-desktop</p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-half has-background-success has-text-centered">is-half is-centered</div>
        </div>
        <div className="columns is-variable is-3">
          <div className="column has-background-info">Dennis</div>
          <div className="column has-background-info">gaps do not work because sass compiler isn't configured to work with variables yet.</div>
          <div className="column has-background-info">Aleksandrov</div>  
        </div>
      </div>
      
      {/* //!*? Tiles section. */}
      <div className="section">
        <div className="container">
          
          <div className="tile is-ancestor box">

            <div className="tile is-vertical is-8">   {/* //* within this is-vertical that tiles that are aligned vertically. */}
              <div className="tile">

                <div className="tile is-parent is-vertical">  
                  <article className="tile is-child notification is-primary">
                    <p className="title">...tiles</p>
                    <p className="subtitle">bottom line</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">the big fat cat</p>
                    <p className="subtitle"> </p>
                  </article>
                </div>
                
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Middle tile</p>
                    <p className="subtitle">Could be an image here</p>
                    <figure className="img is-4by3 box">
                      <Img fluid={img} />
                    </figure>
                  </article>
                </div>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">Yo, whatcha looking at</p>
                  <p className="subtitle">Lagitness</p>
                </article>
              </div>
            </div>

              <div className="tile is-parent">
                <article className="tile is-child message is-success">

                  <p className="message-header">Let's make a grid of pictures with these tiles</p>
                  <p className="message-body">This is what will get him: ofcourse you could create it yourself but that many hours in wix and yet it's limited in what you can do. I can do it for free, all I need is to get an eye for website design and you apparently have an eye for designing anything. So making a website that you like will teach me what is a good design and what isn't. Also dude, your my nigga man. I got your back and you got mine man.

                  <p className="message-body">But first I got to learn the codes to create anything you would invision. Ilya will through curve balls for sure.</p>
                  <p>Making a website for Ilya Krivov would give me a design model from an expert. He should draw out how he wants it to look and I make that. Have a few websites to showcase and be humble in telling in that I'm not the greatest desginer as you saw for yourself with the websites so in making the website that you find very pleasing to the eyes I'll know what is a good design and what isn't so because you got an eye for it. </p>
                  </p>

                </article>
              </div>
              
          </div>
        </div>
      </div>
      
      <div className="container box">
        <article className="media has-background-white">
          <figure className="media-left">
            <p className="image is-128x128">
              <Img fluid={profileImage} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Hayman</strong>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptates dolore maxime, odit ea ex dolores officiis saepe quam necessitatibus laboriosam magni assumenda at nemo. Maiores rem soluta facere.
                <br />
                <small> <span>Like</span> <span>Reply</span> 3 hrs</small>
              </p>
            </div>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <Img fluid={profileImage} />
                </p>              
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>It's yo madda</strong>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis itaque suscipit ullam impedit quo, asperiores accusamus recusandae eaque? Doloremque blanditiis reprehenderit voluptate voluptates cum consequuntur odio debitis eos cumque laborum?
                    <br/>
                    <small> <sapn>Like</sapn> <sapn>Reply</sapn> 2 mins</small>
                  </p>
                </div>
                <article className="media">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit optio perferendis facilis. Optio tempora tenetur provident veritatis, nostrum necessitatibus odit quae saepe vel, quibusdam aperiam maiores? Deleniti perferendis corrupti quo!
                </article>
                <article className="media">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum, perspiciatis, molestiae sit neque repellendus quod voluptatem hic eaque dolor veniam eveniet distinctio tempore quam repudiandae praesentium rerum repellat ullam!
                </article>
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <Img fluid={profileImage} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Fat Albert</strong>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore earum ex optio, recusandae mollitia suscipit repellendus architecto nostrum totam consequatur possimus aut voluptas vero accusamus nulla, tenetur nobis aliquam illo.
                    <br/>
                    <small><span>Like</span> <span>Reply</span> 2 hrs</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>

    </BackgroundImage>
  </>
)
//* For gaps to work I must set up sass to work with variables.
