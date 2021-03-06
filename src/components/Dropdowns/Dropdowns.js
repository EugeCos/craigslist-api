import React, { Component } from "react";
import { dropdownLists } from "./lists";
import PropTypes from "prop-types";

// ---------Material-UI----------
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

// ------------CSS------------
import "./Dropdowns.less";

const styles = {
  customWidth: {
    width: 250
  }
};

export default class Dropdowns extends Component {
  render() {
    const { location, gig, handleChange } = this.props;
    const { locations, gigs } = dropdownLists;

    const locationMenu = locations.map(location => {
      return (
        <MenuItem
          key={location.name}
          value={location.name}
          primaryText={location.name}
        />
      );
    });

    const gigTypeMenu = gigs.map(gig => {
      return (
        <MenuItem key={gig.name} value={gig.name} primaryText={gig.name} />
      );
    });

    return (
      <div className="dropdowns-container">
        <p>Select your GTA area and gig type</p>

        <div className="dropdowns-wrapper">
          {/* List of GTA locations */}
          <DropDownMenu
            value={location}
            onChange={(e, i, value) =>
              handleChange(e, i, value, "location", "locations")
            }
            autoWidth={false}
            style={styles.customWidth}
            underlineStyle={{ borderColor: "#34495e" }}
            selectedMenuItemStyle={{ color: "#0abde3" }}
            iconStyle={{ fill: "#3498db" }}
          >
            {locationMenu}
          </DropDownMenu>
          <br />

          {/* List of gigs */}
          <DropDownMenu
            value={gig}
            onChange={(e, i, value) => handleChange(e, i, value, "gig", "gigs")}
            autoWidth={false}
            style={styles.customWidth}
            underlineStyle={{ borderColor: "#34495e" }}
            selectedMenuItemStyle={{ color: "#0abde3" }}
            iconStyle={{ fill: "#3498db" }}
          >
            {gigTypeMenu}
          </DropDownMenu>
        </div>
      </div>
    );
  }
}

Dropdowns.propTypes = {
  handleChange: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  gig: PropTypes.object.isRequired
};
