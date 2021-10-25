import * as React from "react"
import Image from "../components/image"
import Layout from "../components/layout"

// images.js is an arrow functional component containing <Layout> 
// which helps in presenting the images present in <Image> sub-component.

const images = () => (
  <Layout>
    <Image />
  </Layout>
)

export default images
