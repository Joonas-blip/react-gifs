import React, { Component } from "react";
import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: "l3fQf1OEAq0iri9RC",
      gifs: []
    };
  }

  search = (query) => {
    giphy('AXfaYoXGbupQ5UnqWrNRWRNTfFQfytG0').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
