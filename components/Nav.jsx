import { useState } from 'react';
import Link from 'next/link'

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      {/* <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div> */}

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">

        <Link href="/">
          <a className="navbar-item">
            Home
          </a>
        </Link>

        <Link href="/projects">
          <a className="navbar-item">
            Projects
          </a>
        </Link>

      </div>
      <div className="navbar-end">

        <a href="https://www.linkedin.com/in/julien-rippstein-5992403b/" target="_blank" className="icon navbar-item">
        <i className="lab la-linkedin"></i>
      </a>
      <a href="https://github.com/JRippy" target="_blank" className="icon navbar-item">
      <i className="lab la-github "></i>
    </a>
  </div>


</div>


<style jsx>{`
  nav {
    padding: 0 40px;
  }

  .icon {
    height: 100%;
    margin: 0 15px;
    font-size: 32px;
    color: #dfa25f;
    transition: 0.2s;
  }

  .icon:hover {
    color: #d99244;
  }

  #navigation-menu {
    position: relative;
    left: auto;
    top: 0%;
    right: 400px;
    bottom: auto;
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    width: 400px;
    margin-left: 90px;
    padding: 30px 180px 30px 90px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-right: 1px solid #ededed;
    background-color: #fff;
    transition: 0.5s all ease;
  }

  #navigation-menu.open {
    right: 0%;
  }

  .nav-link {
    position: relative;
    text-decoration: none;
    color: #333;
    transition: 0.3s all ease;
  }

  .nav-link:hover {
    color: #555;
  }

  .nav-text {
    position: relative;
    z-index: 3;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
  }

  .nav-line {
    position: absolute;
    z-index: 2;
    bottom: 12px;
    height: 12px;
    width: 0%;
    background-color: #dfa25f;
    transition: 0.3s all ease;
  }

  .nav-link:hover .nav-line {
    width: 110%;
  }

  `}</style>
</nav>
)}

export default Nav
