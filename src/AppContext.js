import React from "react";


 export default React.createContext({
    onFinishButtonClick: () => {
        console.log("Finish button clicked!")
      },
    
      onDeleteButtonClick: () => {
        console.log("Delete button clicked!")
      }
})

