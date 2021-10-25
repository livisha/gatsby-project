import * as React from "react"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"

// IndexPage is a functional component calling sub-coponent like
// Layout provides structure to the website by having header, footer and other sectional components
// Seo is a  component which provide content to provide hints to the search engine crawlers to easily understand your website.

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
     <HeroSection />
     <Image />
  </Layout>
)

export default IndexPage
