import React from "react";
import AppContext from "../../AppContext";

const ItemButtons = () => {
  console.log(AppContext);
  return (
    <AppContext.Consumer>
      
      {
      (context) => ( 
        
        <div id="item-buttons">
          <button type="done" className="m-1" onClick={context.onFinishButtonClick}>
            Finish
          </button>
          <button type="delete" className="m-1" onClick={context.onDeleteButtonClick}>
            Delete
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default ItemButtons;
