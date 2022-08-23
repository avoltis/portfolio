import React from "react";
import PropTypes from "prop-types";

export default function Hobbies({ hobbies }) {
  return (
    <div className="card">
      <div className="card-content">
        <section className="section">
          <div className="container">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={process.env.PUBLIC_URL + "/img/nature.svg"}
                    alt="hobbies"
                  ></img>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Hobbies</p>
                <p className="subtitle is-6">#SpareTime</p>
              </div>
            </div>
            <h2 className="subtitle">{hobbies}</h2>
          </div>
        </section>
      </div>
    </div>
  );
}

Hobbies.propTypes = {
  hobbies: PropTypes.string,
};

Hobbies.defaultProps = {
  hobbies: "",
};
