import React from 'react';

export default function Education() {
  return (
    <div className="card">
      <div className="card-content">
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
            <p className="title is-4">Education </p>
            <p className="subtitle is-6">#Training</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="www.uni.com">@bulmaio</a>.
          <a href="www.uni.com">#css</a> <a href="www.uni.com">#responsive</a>
          <br></br>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="www.uni.com">@bulmaio</a>.
          <a href="www.uni.com">#css</a> <a href="www.uni.com">#responsive</a>
          <br></br>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="www.uni.com">@bulmaio</a>.
          <a href="www.uni.com">#css</a> <a href="www.uni.com">#responsive</a>
          <br></br>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="www.uni.com">@bulmaio</a>.
          <a href="www.uni.com">#css</a> <a href="www.uni.com">#responsive</a>
          <br></br>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
