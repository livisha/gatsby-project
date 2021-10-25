import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

// 404.js is a error message fie whenver there is a error or crash of web 
// page the content of this file is rendered.
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
     {/* NotFoundPage is a functional component containing <Layout>, <Seo> components to present message. */}
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
