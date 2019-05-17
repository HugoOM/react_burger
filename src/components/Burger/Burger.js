import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

const burger = props => {
  const burgerIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      const ingredientElements = [];

      for (let i = 0; i < props.ingredients[ingredientKey]; i++)
        ingredientElements.push(
          <BurgerIngredient
            type={ingredientKey}
            key={`${ingredientKey}_${i}`}
          />
        );

      return ingredientElements;

      // Alternate From Tutorial:
      //   return [...Array(props.ingredients[ingredientKey])].map((_,i) => <BurgerIngredient type={ingredientKey} key={ingredientKey+i} />)
    })
    .reduce((arr, el) => arr.concat(el), []);

  const noIngredientsDefault = <p>Please Start Adding Ingredients!</p>;

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {burgerIngredients.length ? burgerIngredients : noIngredientsDefault}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
