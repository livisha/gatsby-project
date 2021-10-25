import * as React from "react"
import Footer from "./Footer"
import "./layout.css"
import Navbar from "./Navbar"

// Layout is a functional component describing the layout with header, main and footer. 
// Children is passed as a parameter from the previous component. It can contain different sub components.
// By defining children we can wrap different JSX elements in a component.
const Layout = ({ children }) => {

  return (
    <>
    <Navbar />
    <main>{children}</main>
    <Footer />
    </>
  )
}
export default Layout
