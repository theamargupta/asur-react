import React from "react";
import "./App.css";

import name from "./components/name/name";
import { CardList } from "./components/card-list/ca-li-com";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      asurs: name,
    };
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search asur"
          onChange={ e => {
            this.setState({ searchField: e.target.value }
            );
          }}
        />
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"
          alt=""
        />
        <CardList asurs={this.state.asurs} />
      </div>
    );
  }
}
export default App;
//23 video
