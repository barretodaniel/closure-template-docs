import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ConceptsPage = () => (
  <Layout>
    <SEO title="Concepts" />
    <h1 className="title">Concepts</h1>
    <div className="content">
      <p>
        This page describes Soy's core concepts—what you need to understand in
        order to be a successful Soy developer.
      </p>
      <p>
        As a new Soy developer, you should begin by going through the Basics
        section in sequence. Once completed, check out the Devguide for material
        on specific topics.
      </p>
    </div>
    <ul>
      <li>
        <Link to="/docs/concepts/templates">Templates</Link>
      </li>
      <li>
        <Link to="/docs/concepts/commands">Commands</Link>
      </li>
      <li>
        <Link to="/docs/concepts/expressions">Expressions</Link>
      </li>
      <li>
        <Link to="/docs/concepts/functions">Functions</Link>
      </li>
      <li>
        <Link to="/docs/concepts/auto-escaping">Auto Escaping</Link>
      </li>
      <li>
        <Link to="/docs/concepts/type-system">Type System</Link>
      </li>
      <li>
        <Link to="/docs/concepts/injected-data">Injected Data</Link>
      </li>
    </ul>
  </Layout>
)

export default ConceptsPage
