import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const DeveloperGuidePage = () => (
  <Layout>
    <SEO title="Developer Guide" />
    <h1 className="title">Developer Guide</h1>
    <ul>
      <li>
        <Link to="docs/developer-guide/basic-template">Basic Template</Link>
      </li>
      <li>
        <Link to="docs/developer-guide/debugging">Debugging</Link>
      </li>
      <li>
        <Link to="docs/developer-guide/delegate-templates">
          Delegate Templates
        </Link>
      </li>
      <li>
        <Link to="docs/developer-guide/compiling-templates">
          Compiling Templates
        </Link>
      </li>
      <li>
        <Link to="docs/developer-guide/rendering-a-template-in-js">
          Rendering a Template In JS
        </Link>
      </li>
      <li>
        <Link to="docs/developer-guide/localization">Localization</Link>
      </li>
      <li>
        <Link to="docs/developer-guide/nullable-types">Nullable Types</Link>
      </li>
      <li>
        <Link to="docs/developer-guide/plugins">Plugins</Link>
      </li>
      <li>
        <Link to="docs/developer-guide/security">Security</Link>
      </li>
      <li>
        <Link to="docs/developer-guide/syntax-highlighting">
          Syntax Highlighting
        </Link>
      </li>
    </ul>
  </Layout>
)

export default DeveloperGuidePage
