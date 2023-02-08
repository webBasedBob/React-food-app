import React, { createContext, useContext } from "react";
import DUMMY_MEALS from "../../dummy-meals";
const MealsContext = createContext([]);

export const MealsContextProvider = (props) => {
  return (
    <MealsContext.Provider value={DUMMY_MEALS}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
