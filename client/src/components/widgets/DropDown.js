import "../../styles/dropdown.css";

import React, { useState } from "react";

function DropDown({ onChange, options, text}) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(options[0]);
  let ul_class = "dropdown-options";
  if (!isActive) {
    ul_class = ul_class + " hide";
  }
  return (
    <div className="dropdown-container">
      <div
        className="dropdown-select"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="dropdown-value">
          {text && `${text}: `}
          <p className="drop-selected" > {value}</p>
        </div>
        <div className="dropdown-arrow"></div>
      </div>
      <ul className={ul_class}>
        {options.map((option, index) => {
          let name = "dropdown-option";
          if (index === 0) {
            name = name + " first";
          } else if (index === options.length - 1) {
            name = name + " last";
          }
          return (
            <li
              key={index}
              value={option}
              className={name}
              onClick={() => {
                setValue(option);
                setIsActive(false);
                onChange(option);
              }}
            >
             {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDown;
