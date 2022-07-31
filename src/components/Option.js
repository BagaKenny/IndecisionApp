import React from "react";

const Option = (props) => (
  <div className="options">
  <p className="options__text">{props.count}. {props.optionText}</p>
    
    <button
    className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
