import React from 'react';

export default function Education({ education }) {
  return (
    <div className="card">
      <div className="card-content">
        <section className="section">
          <div className="container">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={process.env.PUBLIC_URL + '/img/graduation.svg'}
                    alt="graduation"
                  ></img>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Education</p>
                <p className="subtitle is-6">#Training</p>
              </div>
            </div>

            {education.map((edu, eduIndex) => (
              <div className="content" key={eduIndex}>
                <span className="heading has-text-primary">
                  {edu.university}
                </span>
                {edu.degree} in {edu.fieldOfStudy}
                <br></br>
                <span>
                  {edu.startYear} - {edu.endYear} - {edu.address}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
