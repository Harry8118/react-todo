import React from "react";

import styles from "./MyInput.module.css";

const Myinput = (props) => {
  return <input className={styles.myInput} {...props} />;
};

export default Myinput;
