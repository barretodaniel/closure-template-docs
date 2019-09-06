import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to the Closure Template Documentation</p>
    <ul>
      <li>
        <Link to="docs/concepts">Concepts</Link>
      </li>
      <li>
        <Link to="docs/reference">Reference</Link>
      </li>
      <li>
        <Link to="docs/developer-guide">Developer Guide</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
