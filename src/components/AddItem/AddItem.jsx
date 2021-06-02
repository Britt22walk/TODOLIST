import React, { Component } from 'react';

const AddItem = () => {
    return (
        <div id="add-form" className="add-form m-1 p-1">
            <form>
              <input type="text" requird placeholder="Update your list"></input>
              <button type="submit" className="submit-buttom m-1">Add Item</button>
            </form>
          </div>
      );
}
 
export default AddItem;