import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import useIsVisible from "./hooks/use-is-visible";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";

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
  const displayAuthModal = useSelector((state) => {
    return state.auth.displayAuthModal;
  });

  return (
    <CartProvider>
      {displayAuthModal ? <Auth></Auth> : ""}
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
