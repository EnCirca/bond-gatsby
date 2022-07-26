import { slide as Menu } from 'react-burger-menu'
import * as React from "react"
import { Link } from "gatsby"

class MobileNav extends React.Component {
  render () {
    return (
      <Menu class="mobileNav">
      <Link to="/" className="menu-item" >
        Home
      </Link>
      <Link to="https://www.encirca.com/" className="menu-item" >
        EnCirca Inc.
      </Link>
      <Link to="/faq" className="menu-item" >
        F.A.Q.
      </Link>
      <Link to="/glossary" className="menu-item" >
        Glossary
      </Link>
      <Link to="/terms" className="menu-item" >
        Terms
      </Link>
      <Link to="/contact" className="menu-item" >
        Contact
      </Link>
      </Menu>
    );
  }
}

export default MobileNav