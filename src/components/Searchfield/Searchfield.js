import React from "react";
import "./Searchfield.less";

// -----------Material-UI------------
import TextField from "material-ui/TextField";

export default function Searchfield(props) {
  const { handleChange, gig, searchValue } = props;
  return (
    <TextField
      value={searchValue}
      underlineStyle={{ borderColor: "#34495e" }}
      hintText="Search"
      floatingLabelText={`Search ${gig.toLowerCase()}`}
      onChange={handleChange}
    />
  );
}
