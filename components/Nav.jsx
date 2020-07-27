import { useState } from 'react';
import Link from 'next/link'

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Home
        </a>

        <a className="navbar-item">
          Projects
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              About
            </a>
            <a className="navbar-item">
              Jobs
            </a>
            <hr className="navbar-divider"/>
            <a className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </div>

    </div>

  <style jsx>{`

  `}</style>
</nav>
)}

export default Nav
