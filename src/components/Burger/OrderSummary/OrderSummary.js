import React from "react";
import Button from "../../UI/Button/Button";

// const orderSummary = props =>
const orderSummary = props => (
  <>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {Object.keys(props.ingredients).map(ingredientKey => (
        <li key={ingredientKey}>
          {/* {ingredientKey}: {props.ingredients[ingredientKey]} */}
          <span style={{ textTransform: "capitalize" }}>
            {ingredientKey}
          </span>: {props.ingredients[ingredientKey]}
        </li>
      ))}
    </ul>
    <p>
      Total Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    <p>Continue to Checkout?</p>
    <Button actionType="Danger" clicked={props.purchaseCancelled}>
      CANCEL
    </Button>
    <Button actionType="Success" clicked={props.purchaseContinued}>
      CONTINUE
    </Button>
  </>
);

export default orderSummary;
