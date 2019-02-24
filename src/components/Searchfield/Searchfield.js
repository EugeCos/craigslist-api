import React from "react";

// -----------Material-UI------------
import TextField from "material-ui/TextField";

export default function Searchfield(props) {
  const { handleChange, gig, searchValue } = props;
  return (
    <div>
      <TextField
        value={searchValue}
        hintText="Search"
        floatingLabelText={`Search ${gig.toLowerCase()}`}
        onChange={handleChange}
      />
      <br />
    </div>
  );
}
