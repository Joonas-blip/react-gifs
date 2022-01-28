import React, { Component } from "react";
import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: "l3fQf1OEAq0iri9RC",
      gifs: []
    };
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
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
