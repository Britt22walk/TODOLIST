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
    const newList = [
      ...this.state.listItems, { item: userInput, finished: false }
    ]
    this.setState({
      listItems: newList,
    });
    
   
  };

  onAddItemClick() {
    console.log("button clicked!");
  }

  render() {
    return (
      <main className="App mt-5 p-2">
        <h1>My To-Do List</h1>
        <AddItem
          onAddItemClick={this.onAddItemClick}
          updateListItems={this.updateListItems}
        />
        <AllTodos items={this.state.listItems} />
      </main>
    );
  }
}

export default App;
