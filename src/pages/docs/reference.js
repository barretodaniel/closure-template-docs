import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ReferencePage = () => (
  <Layout>
    <SEO title="Reference" />
    <h1 className="title">Reference</h1>
    <ul>
      <li>
        <Link to="/docs/reference/calls">Calls</Link>
      </li>
      <li>
        <Link to="/docs/reference/coercions">Coercions</Link>
      </li>
      <li>
        <Link to="/docs/reference/comments">Comments</Link>
      </li>
      <li>
        <Link to="/docs/reference/control-flow">Control Flow</Link>
      </li>
      <li>
        <Link to="/docs/reference/debugger">Debugger</Link>
      </li>
      <li>
        <Link to="/docs/reference/delegate-templates">Delegate Templates</Link>
      </li>
      <li>
        <Link to="/docs/reference/expressions">Expressions</Link>
      </li>
      <li>
        <Link to="/docs/reference/file-declarations">File Declarations</Link>
      </li>
      <li>
        <Link to="/docs/reference/functions">Functions</Link>
      </li>
      <li>
        <Link to="/docs/reference/html-validation">HTML Validation</Link>
      </li>
      <li>
        <Link to="/docs/reference/let">Let</Link>
      </li>
      <li>
        <Link to="/docs/reference/logging">Logging</Link>
      </li>
      <li>
        <Link to="/docs/reference/messages">Translation</Link>
      </li>
      <li>
        <Link to="/docs/reference/print-directives">Print Directives</Link>
      </li>
      <li>
        <Link to="/docs/reference/print">Print</Link>
      </li>
      <li>
        <Link to="/docs/reference/security">Security</Link>
      </li>
      <li>
        <Link to="/docs/reference/templates">Templates</Link>
      </li>
      <li>
        <Link to="/docs/reference/textual-commands">Textual Commands</Link>
      </li>
      <li>
        <Link to="/docs/reference/types">Types</Link>
      </li>
    </ul>
  </Layout>
)

export default ReferencePage
