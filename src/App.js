import React from "react";
import "./App.css";

import name from "./components/name/name";
import { CardList } from "./components/card-list/ca-li-com";
import { SearchBox } from "./components/search-box/serch-comp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      asurs: name,
      searchField: "",
    };
  }
  handChang = e => {
      this.setState({ searchField: e.target.value });
  }
  render() {
    const { asurs, searchField } = this.state;
    const filterAsurs = asurs.filter((asur) =>
      asur.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <div>
      <h1> <img className="appImg" src="https://robohash.org/1?set=set2&size=250x220" alt="" /> Asur</h1>
      </div>
      
        <SearchBox
          placeholder="Search Asur"
          handChang={this.handChang }
        />
        <CardList asurs={filterAsurs} />
      </div>
    );
  }
}
export default App;
//34