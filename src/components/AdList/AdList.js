import React, { Component } from "react";
import "./AdList.less";

// --------Components---------
import Ad from "./Ad/Ad";

export default class AdList extends Component {
  render() {
    return (
      <div>
        <Ad />
      </div>
    );
  }
}
