import React from 'react'
import { useStaticQuery ,graphql} from "gatsby"
import Img from "gatsby-image"
import "./image.css"

// it uses an API of images and we installed the Gatsby-plugin-sharp which is for fetching the image data.
const Image=()=>{
    
    // Image.js is an arrow function that is used for writing GraphQL query which is used to 
    // read or fetch values for using all the images with particular filters and conditions 
    // which image should include.GraphQL queries help to reduce over fetching of data. 
    // Fluid function is used to set size and properties. In return map() function present the images.
    const data = useStaticQuery(graphql`
    query {
        allFile(
            filter: {
                extension: {regex: "/(jpg)|(png)|(jpeg)/" },
                name: { nin: [ "img1" ,"img2"]}
            }
            ) {
                edges {
                  node {
                    base
                    childImageSharp {
                    fluid(maxHeight:600,maxWidth:600){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
      }
    `)
    return(
       
       <div className="image-container">
        <h1>View Out Designs</h1>
        <div className="image-grid">
        
        {/* map function used for fetching all the data stored in the project with filters mentioned. */}
            {data.allFile.edges.map((image,key)=>(
                <Img 
                key={key}
                className="image-item"
                fluid={image.node.childImageSharp.fluid}
                />
            ))}
        </div>
       </div>
    )
}
export default Image
