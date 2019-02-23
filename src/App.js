import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ----------Components----------
import Navbar from "./components/Navbar/Navbar";
import Dropdowns from "./components/Dropdowns/Dropdowns";
import Searchfield from "./components/Searchfield/Searchfield";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "All Toronto",
      event: "All",
      gig: "All",
      selectedServiceType: "Gigs"
    };
  }

  handleDropdownChange = (e, i, value, dropdownName, service) =>
    this.setState({
      [dropdownName]: value,
      selectedServiceType: service ? service : this.state.selectedServiceType
    });

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="app-content">
          <Dropdowns
            handleChange={this.handleDropdownChange}
            location={this.state.location}
            event={this.state.event}
            gig={this.state.gig}
            selectedServiceType={this.state.selectedServiceType}
          />
          <Searchfield />
        </div>
      </div>
    );
  }
}

export default App;
