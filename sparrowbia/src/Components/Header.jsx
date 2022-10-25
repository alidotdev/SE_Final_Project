import React from "react";
import "./headerfooter.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid" id="main-name">
        <img src="/images/icon.png" alt="" />
        <h1>SPARROWBIA</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="menu-list">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Men
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Women
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kids
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
                id="navbarDropdown3"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Accessories
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
