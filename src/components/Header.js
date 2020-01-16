import React from 'react';

export default function Header() {
  return (
    <section className="hero">
      <figure className="image container is-128x128">
        <img
          alt="profile pic"
          className="is-rounded"
          src={process.env.PUBLIC_URL + '/img/profile_pic.svg'}
        />
      </figure>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Voltis Agolli</h1>
          <h2 className="subtitle">FullStack Dev, Wroclaw Poland</h2>
          <h6 className="subtitle">Resume</h6>
        </div>
      </div>
    </section>
  );
}
