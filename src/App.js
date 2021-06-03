import "./App.css";
import { React, Component } from "react";
import AllTodos from "./components/AllTodos/AllTodos";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        { item: "Buy milk", finished: false },
        { item: "Feed Pets", finished: false },
        { item: "Pay Credit Card", finished: false },
        { item: "Do Laundry", finished: false },
      ],
    };
  }

  updateListItems = (userInput) => {
    console.log(userInput);
    const listItems = [
      ...this.state.listItems,
      { item: userInput, finished: false },
    ];
    this.setState({
      listItems
    });
  };

  

  onClearButtonClick = () => {
    console.log("Clear button clicked!")
    const listItems = [];
    this.setState({
      listItems
    })
  };

  render() {
    return (
      <main className="App mt-5 p-2">
        <h1>My To-Do List</h1>
        <AddItem
          onAddItemClick={this.onAddItemClick}
          updateListItems={this.updateListItems}
        />
        <button onClick={this.onClearButtonClick}>Clear List</button>
        <AllTodos items={this.state.listItems}  />
      </main>
    );
  }
}

export default App;
