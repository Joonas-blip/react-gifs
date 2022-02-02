import React, { Component } from "react";
import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: null,
      gifs: []
    };
  }

  search = (query) => {
    giphy('').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  chooseGif = (id) => {
    this.setState({
      selectedGifId: id
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
          <GifList gifs={this.state.gifs} chooseGif={this.chooseGif} />
        </div>
      </div>
    );
  }
}

export default App;
