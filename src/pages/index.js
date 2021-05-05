import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout homeImageData={data}>
    <SEO title="Home" />
    <h1>Główna</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    firstProjectImage: file(relativePath: { eq: "socialapp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    firstProjectImageMobile: file(
      relativePath: { eq: "socialmediappmobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondProjectImage: file(relativePath: { eq: "drugiprojekt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondProjectImageMobile: file(
      relativePath: { eq: "drugiprojektmobile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
