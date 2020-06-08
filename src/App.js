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

  render() {
    const { asurs, searchField } = this.state;
    const filterAsurs = asurs.filter((asur) =>
      asur.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Asur"
          handChang={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList asurs={filterAsurs} />
      </div>
    );
  }
}
export default App;
