import React from "react";
import PropTypes from "prop-types";

export default function Footer({ social: { email } }) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Portfolio</strong> by{" "}
          <a href={"mailto:" + email}>Voltis Agolli</a>
          {/* . The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed {' '}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          . */}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  social: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
  }),
};

Footer.defaultProps = {
  social: {
    email: "",
    linkedIn: "",
    github: "",
  },
};
