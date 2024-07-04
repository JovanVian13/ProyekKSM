import React from "react";

const Button = (props) => {
    return (
      <button className={`${props.defaultColor} rounded-md transition-all px-4 py-2 ${props.margin} font-semibold hover:bg-black`} onClick={props.click}>
        {props.children}
      </button>
    );
}

export default Button;