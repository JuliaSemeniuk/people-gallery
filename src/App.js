import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ people: users }))
    );
  }

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter((person) =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder={"search a person"}
          handleChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList people={filteredPeople}></CardList>
      </div>
    );
  }
}

export default App;
