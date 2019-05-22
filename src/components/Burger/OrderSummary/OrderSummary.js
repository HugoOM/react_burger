import React from "react";

const orderSummary = props => (
  <>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    {Object.keys(props.ingredients).map(ingredientKey => (
      <p>
        {/* {ingredientKey}: {props.ingredients[ingredientKey]} */}
        {`${ingredientKey}: ${props.ingredients[ingredientKey]}`}
      </p>
    ))}
  </>
);
export default orderSummary;
