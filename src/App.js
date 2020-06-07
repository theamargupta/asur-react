import React from "react";
import "./App.css";

import name from './components/name/name'
import {CardList} from "./components/card-list/ca-li-com"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      asurs: name
    };
  }

  render() {
    return (
      <div className="App">
      <CardList asurs={this.state.asurs} />
      </div>
    );
  }
}
export default App;
