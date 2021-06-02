import React, { Component } from 'react';

class AddItem extends Component {
    render() { 
        return (
        <div id="add-form" className="add-form m-1 p-1">
            <form>
              <input type="text" required placeholder="Update your list"></input>
              <button type="submit" className="submit-buttom m-1" onClick={this.props.onAddItemClick}>Add Item</button>
            </form>
          </div>  );
    }
}
 
export default AddItem;

