import React from "react";
import styles from "./Button.module.css";

const button = props => (
  <button
    onClick={props.clicked}
    className={[styles.Button, styles[props.actionType]].join(" ")}
  >
    {props.children}
  </button>
);

export default button;
