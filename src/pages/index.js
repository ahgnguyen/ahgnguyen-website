import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello. This is the home page!</h1>
    <p>Welcome to ahgnguyen.github.io.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/">Go to blog</Link><br />
    <Link to="/portfolio/">Go to portfolio</Link>
  </Layout>
)

export default IndexPage
