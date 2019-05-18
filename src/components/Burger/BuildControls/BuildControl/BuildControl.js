import React from "react";
import styles from "./BuildControl.module.css";

const buildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      className={styles.Less}
      onClick={() => props.removeIngredient(props.type)}
      disabled={props.ingredientCount === 0}
    >
      Less
    </button>
    <button
      className={styles.More}
      onClick={() => props.addIngredient(props.type)}
    >
      More
    </button>
  </div>
);

export default buildControl;
