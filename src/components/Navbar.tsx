import { portfolio } from "../types";
import "../../node_modules/bulma-switch/dist/css/bulma-switch.min.css";
import { themeOptions } from "../config";
import { useTheme } from "../context/theme";

export default function Navbar({
  social: { email, github },
  resume,
}: screenProps) {
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
          <div className="field">
            <input
              id="themingSwitch"
              type="checkbox"
              name="themingSwitch"
              className="switch"
              checked={theme === themeOptions.dark}
              onChange={() => {}}
            />
            <label>{theme === themeOptions.dark ? "Light" : "Dark"}</label>
          </div>
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

type screenProps = {
  social: portfolio["social"];
  resume: portfolio["resume"];
};
