import React from "react";
import "./Searchfield.less";
import PropTypes from "prop-types";

// -----------Material-UI------------
import TextField from "material-ui/TextField";

export default function Searchfield(props) {
  const { handleChange, gig, searchValue } = props;
  return (
    <div className="search-field-container">
      <TextField
        value={searchValue}
        underlineStyle={{ borderColor: "#34495e" }}
        hintText="Search"
        floatingLabelText={`Search ${gig.toLowerCase()}`}
        onChange={handleChange}
      />
    </div>
  );
}

Searchfield.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  gig: PropTypes.object.isRequired
};
