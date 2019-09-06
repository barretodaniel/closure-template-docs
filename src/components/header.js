import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-info"
    role="navigation"
    ariaLabel="dropdown navigation"
  >
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/">
            {siteTitle}
          </Link>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/docs/concepts">
              Concepts
            </Link>
            <Link className="navbar-item" to="/docs/reference">
              Reference
            </Link>
            <Link className="navbar-item" to="/docs/developer-guide">
              Developer Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
