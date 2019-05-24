import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState = () => {
    const ingredientsAmount = Object.values(this.state.ingredients);

    this.setState({ purchaseable: ingredientsAmount.some(amount => !!amount) });
  };

  addIngredientHandler = type => {
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] + 1
    };

    this.setState(
      {
        totalPrice: updatedPrice,
        ingredients: updatedIngredients
      },
      this.updatePurchaseState
    );
  };

  removeIngredientHandler = type => {
    if (!this.state.ingredients[type]) return;

    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] - 1
    };

    this.setState(
      {
        totalPrice: updatedPrice,
        ingredients: updatedIngredients
      },
      this.updatePurchaseState
    );
  };

  togglePurchaseState = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  confirmPurchase = () => {
    alert("Continuing With Your Purchase!");
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.purchasing}
          toggleOrder={this.togglePurchaseState}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.togglePurchaseState}
            purchaseContinued={this.confirmPurchase}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          toggleOrder={this.togglePurchaseState}
        />
      </>
    );
  }
}

export default BurgerBuilder;
