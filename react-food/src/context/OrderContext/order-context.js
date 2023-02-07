import React, { createContext, useReducer } from "react";

const OrderContext = createContext({
  pula: "pizda",
});

const cartReducer = (state, action) => {
  const stateClone = structuredClone(state);
  const storedMealIndex = stateClone.findIndex((meal) => {
    return meal.id === action.meal.id;
  });
  if (storedMealIndex !== -1) {
    if (action.type === "ADD") {
      stateClone[storedMealIndex].amount += action.meal.amount;
    }
    if (action.type === "REMOVE") {
      stateClone[storedMealIndex].amount -= action.meal.amount;
    }
    return stateClone.filter((meal) => {
      return meal.amount > 0;
    });
  } else {
    if (action.type === "ADD") {
      return [...stateClone, action.meal];
    }
    if (action.type === "REMOVE") {
      return stateClone;
    }
  }
};

export const OrderContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, []);
  const addToCart = (mealObj) => {
    dispatchCart({ type: "ADD", meal: mealObj });
  };
  const removeFromCart = (mealObj) => {
    dispatchCart({ type: "REMOVE", meal: mealObj });
  };
  return (
    <OrderContext.Provider
      value={{
        addMeal: addToCart,
        removeMeal: removeFromCart,
        cartState: cartState,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
