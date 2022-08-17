import "../../styles/dropdown.css";

import React, { useState } from "react";

function DropDown({ onChange, options, text, icon }) {
  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState(options[0].label);
  let ul_class = "dropdown-options";
  if (!isActive) {
    ul_class = ul_class + " hide";
  }
  return (
    <div className="dropdown-container">
      <div
        className="dropdown-select outline"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="dropdown-value">
          {icon && icon}
          {text && `${text}: `}
          <p className="drop-selected" > {label}</p>
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
              key={option.label}
              value={option.value}
              className={name}
              onClick={() => {
                setLabel(option.label);
                setIsActive(false);
                onChange(option.value);
              }}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropDown;
