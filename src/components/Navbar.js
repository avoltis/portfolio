import React from 'react';

export default function Navbar({ social: { email, github } }) {
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
            src={process.env.PUBLIC_URL + '/img/profile_pic.svg'}
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
              <a className="navbar-item" href={github}>
                <img
                  src={
                    process.env.PUBLIC_URL + '/icons/github-icon-inverted.png'
                  }
                  alt="github link"
                ></img>
              </a>
              <a className="navbar-item" href={'mailto:' + email}>
                <img
                  src={process.env.PUBLIC_URL + '/icons/globe-contact.png'}
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
