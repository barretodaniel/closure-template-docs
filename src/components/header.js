import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState} from "react"

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false)
  return(
  <nav
    className="navbar is-info"
    role="navigation"
    aria-label="dropdown navigation"
  >
    <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      Closure Templates
    </Link>
      <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={() => setIsActive(!isActive)}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>
    <div className={`navbar-menu ${isActive ? "is-active": ''}`}>
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="/">
            Documentation
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
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
