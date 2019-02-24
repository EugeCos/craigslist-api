import React, { Component } from "react";
import "./Ad.less";

export default class Ad extends Component {
  render() {
    let craigslistAd = this.props.searchResults.map((ad, index) => {
      return (
        <a
          href={ad.link}
          target="_blank"
          style={{ textDecoration: "none" }}
          key={index}
        >
          <div className="ad-container">
            {/* Add picture  */}
            <img src={ad.image} alt="ad" className="ad-picture" />

            {/* ad title and location */}
            <div className="ad-title-wrapper">
              <p
                className="ad-title"
                dangerouslySetInnerHTML={{ __html: ad.title }}
              />
              <div className="ad-location-and-date">
                <p dangerouslySetInnerHTML={{ __html: ad.location }} />

                {/* Only show below div if screen width is > 640px (CSS setup) */}
                <p className="ad-date">{ad.date}</p>
              </div>
            </div>
          </div>
        </a>
      );
    });

    return <div>{craigslistAd}</div>;
  }
}
