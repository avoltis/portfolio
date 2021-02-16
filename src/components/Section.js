import React from "react";
import PropTypes from "prop-types";

export default function Section({ summary }) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">About Me</h1>
        <h2 className="subtitle">{summary}</h2>
      </div>
    </section>
  );
}

Section.propTypes = {
  summary: PropTypes.string,
};

Section.defaultProps = {
  summary: "",
};
