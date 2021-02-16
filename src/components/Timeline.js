import React from "react";

export default function Timeline({ experience }) {
  return (
    <section className="section">
      <div className="container">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={process.env.PUBLIC_URL + "/img/atwork.svg"}
                alt="graduation"
              ></img>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Experience</p>
            <p className="subtitle is-6">#Dev</p>
          </div>
        </div>
        <br></br>

        <div className="timeline is-centered">
          {experience.map((company, index) => (
            <React.Fragment key={index}>
              <header className="timeline-header">
                <span className="tag is-primary">
                  {company.endDate || "Current"}
                </span>
              </header>
              <div className="timeline-item is-primary">
                <div className="timeline-marker is-primary is-image is-32x32">
                  <img alt="" src={company.image}></img>
                </div>
                <div className="timeline-content">
                  <div align={index % 2 === 0 ? "left" : "right"}>
                    <p className="heading has-text-primary">
                      {company.company}
                    </p>

                    {company.description && (
                      <p className="subtitle">{company.description}</p>
                    )}
                    {company.address && (
                      <p className="subtitle">{company.address}</p>
                    )}
                  </div>
                  <br></br>
                  <div className="field is-grouped is-grouped-multiline">
                    {company.skills.map((skill, skillIndex) => (
                      <div className="control" key={skillIndex}>
                        <div className="tags has-addons">
                          <span className="tag is-link is-rounded">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}

          <header className="timeline-header">
            <span className="tag is-medium is-primary">June 2012</span>
          </header>
        </div>
      </div>
    </section>
  );
}
