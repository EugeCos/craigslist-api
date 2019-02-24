import React, { Component } from "react";
import { dropdownLists } from "./components/Dropdowns/lists";
import "./App.less";
import "./css/global.less";

// ----------Components----------
import Navbar from "./components/Navbar/Navbar";
import Dropdowns from "./components/Dropdowns/Dropdowns";
import Searchfield from "./components/Searchfield/Searchfield";
import AdList from "./components/AdList/AdList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { name: "All Toronto", url: "" },
      gig: { name: "All", url: "/ggg" },
      searchValue: "",
      loading: false,
      searchResults: []
    };
  }

  componentDidMount() {
    this.craigslistSearch();
  }

  handleDropdownChange = (e, i, value, dropdownName, url) => {
    this.setState(
      {
        [dropdownName]: { name: value, url: dropdownLists[url][i].url },
        loading: true
      },
      () => this.craigslistSearch()
    );
  };

  handleSearchInputChange = e => {
    this.setState({ searchValue: e.target.value, loading: true }, () =>
      this.craigslistSearch()
    );
  };

  craigslistSearch = () => {
    const { location, gig, searchValue } = this.state;
    let url = `https://toronto.craigslist.org/search${location.url}${gig.url}`;

    // If there is user input, add it to the query
    if (searchValue) {
      url += `?query=${searchValue}&is_paid=all`;
    }

    fetch(url)
      .then(response => response.text())
      .then(contents => this.saveCraigslistData(contents))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  };

  saveCraigslistData = response => {
    // Step 1. Parse response text into html
    const parser = new DOMParser();
    // const doc = parser.parseFromString(response, "text/html");
    const doc = parser.parseFromString(response, "text/html");

    // Step 2. Create an array of all results (<li> nodes)
    const listElements = Array.from(doc.querySelectorAll(".rows li"));

    // Step 3. Filter array, leaving only date, title, location and image
    let adsArray = listElements.map(ad => {
      let image = ad.children[0].dataset.ids,
        link = ad.children[0].href,
        date = ad.children[1].children[1].dateTime,
        title = ad.children[1].children[2].innerHTML,
        location = ad.children[1].children[3].children[0].innerHTML;

      if (image !== undefined) {
        // Extract only the first image if there are more than one
        image = image.substring(2).split(",")[0];
        image = `https://images.craigslist.org/${image}_50x50c.jpg`;
      } else {
        // Set image to pacifism icon if there are no images in the ad
        image = "https://image.flaticon.com/icons/svg/366/366423.svg";
      }

      if (location.indexOf("maptag") > -1) {
        location = "location not indicated by poster";
      }

      return {
        date,
        title,
        location,
        image,
        link
      };
    });

    // Step 4. Send filtered array to App state (only first 30 ads)
    this.setState({
      searchResults: adsArray.slice(0, 30),
      loading: false
    });
  };

  render() {
    const { location, gig, searchValue, loading, searchResults } = this.state;
    return (
      <div className="App">
        <Navbar />

        <div className="app-content">
          <Dropdowns
            handleChange={this.handleDropdownChange}
            location={location.name}
            gig={gig.name}
          />
          <Searchfield
            handleChange={this.handleSearchInputChange}
            gig={gig.name}
            searchValue={searchValue}
          />
          <hr className="hr-styled" />
        </div>
        <AdList searchResults={searchResults} loading={loading} />
      </div>
    );
  }
}

export default App;
