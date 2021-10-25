import * as React from "react"
import Footer from "./Footer"
import "./layout.css"
import Navbar from "./Navbar"

//layout
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
