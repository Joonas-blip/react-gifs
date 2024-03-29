import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} chooseGif={this.props.chooseGif} />
        })}
      </div>
    )
  }
}

export default GifList;
