import React, { Component } from "react";
import "./Ad.less";

export default class Ad extends Component {
  render() {
    const ad = {
      internalId: 1,
      title: "Good ad"
    };

    return (
      <a
        href={`/`}
        target="_blank"
        style={{ textDecoration: "none" }}
        key={ad.internalId}
      >
        <div className="ad-container">
          {/* Add picture  */}
          <img
            src="https://images.craigslist.org/00505_fqNoVns3vij_50x50c.jpg"
            alt="ad"
            className="ad-picture"
          />

          {/* ad title and location */}
          <div className="ad-title-wrapper">
            <div className="ad-title">{ad.title}</div>
            <div className="ad-location-and-date">
              <p>(Toronto)</p>

              {/* Only show below div if screen width is > 640px (CSS setup) */}
              <p className="ad-date">Ferbruary 9</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
