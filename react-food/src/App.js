import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import useIsVisible from "./hooks/use-is-visible";
function App() {
  const {
    isVisible: cartIsShown,
    display: showCartHandler,
    hide: hideCartHandler,
  } = useIsVisible(false);

  const {
    isVisible: checkoutIsShown,
    display: showCheckoutHandler,
    hide: hideCheckoutHandler,
  } = useIsVisible(false);

  return (
    <CartProvider>
      {checkoutIsShown && (
        <Checkout
          onClose={hideCheckoutHandler}
          onCancel={hideCheckoutHandler}
        ></Checkout>
      )}
      {cartIsShown && (
        <Cart
          onShowCheckouHandler={showCheckoutHandler}
          onClose={hideCartHandler}
        />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
