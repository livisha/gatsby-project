import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../src/components/layout.css"

// destination.js is a arrow functional component containing <Layout>, 
// <Seo> components to present the Thank you message in the pricing menu.
const Pricing= () => (
  <Layout>
    <Seo title="Contact me" />
    <div  className="pricing">
    <h1>Thank you For showing Intrest In Our Designs</h1>
    <p >Click Below Link 👇</p>
    </div>
   
  </Layout>
)

export default Pricing
