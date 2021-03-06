import React, { Component } from 'react';

class AddItem extends Component {
  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.updateListItems(e.target.newItem.value)
  }
    render() { 
        return (
        <div id="add-form" className="add-form m-1 p-1">
            <form onSubmit={this.onSubmitForm}>
                
              <input type="text" required placeholder="Update your list" value={this.props.userInput} name="newItem"></input>
              <button type="submit" className="submit-buttom m-1" >Add Item</button>
            </form>
          </div>  );
    }
}
 
export default AddItem;

