import React from "react";
import PropTypes from "prop-types";
import "../../node_modules/bulma-switch/dist/css/bulma-switch.min.css";
import { themeOptions } from "../config.js";
import { useTheme } from "../context/theme";

export default function Navbar({ social: { email, github }, resume }) {
  const { theme, setTheme } = useTheme();
  const onThemeChange = () => {
    if (theme === themeOptions.dark) {
      setTheme(themeOptions.light);
    } else {
      setTheme(themeOptions.dark);
    }
  };

  return (
    <nav
      className="navbar"
      style={theme === themeOptions.dark ? { backgroundColor: "#333C3D" } : {}}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" onClick={onThemeChange}>
          <input
            id="themingSwitch"
            type="checkbox"
            name="themingSwitch"
            className="switch is-thin"
            checked={theme === themeOptions.dark ? "checked" : ""}
            onChange={() => {}}
          />
          <label>{theme === themeOptions.dark ? "Light" : "Dark"}</label>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="navbar-item" href={github}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/icons/github-icon-inverted.png"
                  }
                  alt="github link"
                ></img>
              </a>
              <a className="navbar-item" href={"mailto:" + email}>
                <img
                  src={process.env.PUBLIC_URL + "/icons/globe-contact.png"}
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

Navbar.propTypes = {
  social: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
  }),
  resume: PropTypes.string,
};

Navbar.defaultProps = {
  social: {
    email: "",
    linkedIn: "",
    github: "",
  },
  resume: "",
};
