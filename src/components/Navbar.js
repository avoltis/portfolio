import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: '#333C3D' }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://avoltis.github.io/portfolio/">
          <img
            src="/img/profile_pic.svg"
            alt="logo"
            width="112"
            height="28"
          ></img>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="navbar-item" href="https://github.com/avoltis">
                <img
                  src="/icons/github-icon-inverted.png"
                  alt="github link"
                ></img>
              </a>
              <a className="navbar-item" href="mailto:v.agolli@live.com">
                <img
                  src="/icons/globe-contact.png"
                  alt="email link"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
