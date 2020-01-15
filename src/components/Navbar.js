import React from 'react';

export default function Navbar() {
  return (
    <div
      className="navbar"
      style={{ backgroundColor: '#1f2424' }}
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
              <a className="button is-primary" href="https://bulma.io">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="https://bulma.io">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
