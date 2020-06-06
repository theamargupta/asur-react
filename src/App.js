import React from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      asurs: [
        {
          name: "prashanatasur",
          id: 'asc1'
        },
        {
          name: "ashishasur",
          id: 'asc2'
        },
        {
          name: "shubhanshasur",
          id: 'asc3'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.asurs.map(asur => <h1 key={asur.id}>  { asur.name } </h1>)
        }
      </div>
    );
  }
}
export default App;
