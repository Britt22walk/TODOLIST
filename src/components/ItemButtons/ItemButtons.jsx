import React, { Component } from 'react';

const ItemButtons = () => {
    return (
        <div id="item-buttons">
        <button type="done" className="m-1">Finish</button>
        <button type="clear" className="m-1">Delete</button>
      </div>
      );
}
 
export default ItemButtons;