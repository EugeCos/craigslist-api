import React, { Component } from "react";
import moment from "moment";
import "./AdList.less";
import PropTypes from "prop-types";

// --------Components---------
import Ad from "./Ad/Ad";

// -------------Material-UI--------------
import CircularProgress from "material-ui/CircularProgress";

export default class AdList extends Component {
  render() {
    const { loading, searchResults } = this.props;

    return (
      <div className="ad-list-container">
        <h4>Top ads for {moment().format("LL")}</h4>

        {/* If waiting for API response, display Spinner */}
        {loading ? (
          <div className="loading-container">
            <CircularProgress size={60} thickness={5} color={"#f05f57"} />
          </div>
        ) : (
          <Ad searchResults={searchResults} />
        )}
      </div>
    );
  }
}

AdList.propTypes = {
  searchResults: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
