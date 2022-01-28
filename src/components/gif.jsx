import React, { Component } from "react";

class Gif extends Component {
  render() {
    const url = `https://media3.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={url} alt="" className="gif" />
    );
  }
}

export default Gif;
