// import Header from "./components/Layout/Header";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";
// import Checkout from "./components/Checkout/Checkout";
// import useIsVisible from "./hooks/use-is-visible";
// import Auth from "./components/Auth/Auth";
// import { useSelector } from "react-redux";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { authActions } from "./redux-store";
// import { useDispatch } from "react-redux";
import Router from "./router/Router";
function App() {
  return <Router></Router>;
  // const {
  //   isVisible: cartIsShown,
  //   display: showCartHandler,
  //   hide: hideCartHandler,
  // } = useIsVisible(false);

  // const {
  //   isVisible: checkoutIsShown,
  //   display: showCheckoutHandler,
  //   hide: hideCheckoutHandler,
  // } = useIsVisible(false);
  // const displayAuthModal = useSelector((state) => {
  //   return state.auth.displayAuthModal;
  // });
  // let dispatch = useDispatch();
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   console.log(user);
  //   if (user) {
  //     dispatch(authActions.logIn(user.email));
  //   }
  // });
  // return (
  //   <CartProvider>
  //     {displayAuthModal && <Auth></Auth>}
  //     {checkoutIsShown && (
  //       <Checkout
  //         onClose={hideCheckoutHandler}
  //         onCancel={hideCheckoutHandler}
  //       ></Checkout>
  //     )}
  //     {cartIsShown && (
  //       <Cart
  //         onShowCheckouHandler={showCheckoutHandler}
  //         onClose={hideCartHandler}
  //       />
  //     )}
  //     <Header onShowCart={showCartHandler} />
  //     <main>
  //       <Meals />
  //     </main>
  //   </CartProvider>
  // );
}

export default App;
