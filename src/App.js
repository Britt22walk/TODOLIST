import "./App.css";
import { React, Component } from "react";
import AllTodos from "./components/AllTodos/AllTodos";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: ["Buy milk", "Feed Pets", "Pay Credit Card", "Do Laundry"],
      finished: false
    };
  }

  onAddItemClick(){
    console.log('button clicked!')
  }

  render() {
    return (
      <main className="App mt-5 p-2">
        <h1>My To-Do List</h1>
        <AddItem onAddItemClick={this.onAddItemClick}/>
        <AllTodos listItems={this.state.listItems}/>
      </main>
    );
  }
}

export default App;
