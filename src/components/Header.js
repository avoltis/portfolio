import React from 'react';

export default function Header({ name, title, address }) {
  return (
    <section className="hero">
      <figure className="image container is-128x128">
        <img
          alt="profile pic"
          className="is-rounded"
          src={process.env.PUBLIC_URL + '/icons/profile-voltis.png'}
        />
      </figure>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{name}</h1>
          <h2 className="subtitle">
            {title}, {address}
          </h2>
          <h6 className="subtitle">Resume</h6>
        </div>
      </div>
    </section>
  );
}
