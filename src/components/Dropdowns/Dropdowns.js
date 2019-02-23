import React, { Component } from "react";
import { dropdownLists } from "./lists";

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
    const {
      location,
      event,
      gig,
      selectedServiceType,
      handleChange
    } = this.props;
    const { locations, serviceTypes, eventList, gigList } = dropdownLists;

    const locationMenu = locations.map(location => {
      return (
        <MenuItem
          key={location.name}
          value={location.name}
          primaryText={location.name}
        />
      );
    });
    const serviceTypeMenu = serviceTypes.map(service => {
      return (
        <MenuItem
          key={service.name}
          value={service.name}
          primaryText={service.name}
        />
      );
    });
    const eventTypeMenu = eventList.map(event => {
      return (
        <MenuItem
          key={event.name}
          value={event.name}
          primaryText={event.name}
        />
      );
    });
    const gigTypeMenu = gigList.map(gig => {
      return (
        <MenuItem key={gig.name} value={gig.name} primaryText={gig.name} />
      );
    });

    return (
      <div className="dropdowns-container">
        {/* List of GTA locations */}
        <DropDownMenu
          value={location}
          onChange={(e, i, value) => handleChange(e, i, value, "location")}
          autoWidth={false}
          style={styles.customWidth}
        >
          {locationMenu}
        </DropDownMenu>
        <br />

        {/* List of service types (events or gigs) */}
        <DropDownMenu
          value={selectedServiceType}
          onChange={(e, i, value) =>
            handleChange(e, i, value, "selectedServiceType", value)
          }
          autoWidth={false}
          style={styles.customWidth}
        >
          {serviceTypeMenu}
        </DropDownMenu>
        <br />

        {/* Display Event list or Gig list depending on what was selected */}
        {selectedServiceType === "Gigs" ? (
          // List of gigs
          <DropDownMenu
            value={gig}
            onChange={(e, i, value) => handleChange(e, i, value, "gig")}
            autoWidth={false}
            style={styles.customWidth}
          >
            {gigTypeMenu}
          </DropDownMenu>
        ) : (
          // List of events
          <DropDownMenu
            value={event}
            onChange={(e, i, value) => handleChange(e, i, value, "event")}
            autoWidth={false}
            style={styles.customWidth}
          >
            {eventTypeMenu}
          </DropDownMenu>
        )}
      </div>
    );
  }
}
