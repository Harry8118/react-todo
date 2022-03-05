import React from "react";

import stiles from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={stiles.mybtn}>
      {children}
    </button>
  );
};

export default MyButton;
