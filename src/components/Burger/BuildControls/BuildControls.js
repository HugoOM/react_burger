import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        ingredientCount={props.ingredients[ctrl.type]}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.toggleOrder}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
