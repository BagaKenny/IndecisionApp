import React from "react";

const Action = (props) => (
  <div>
    {/* Si il n'y a rien dans le tableau desactiver le bouton */}
    <button 
    className="big-button"
    onClick={props.handlePick} disabled={!props.hasOptions}>
      What Should I do ?
    </button>
  </div>
);

export default Action;
