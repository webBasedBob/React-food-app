import React from "react";
import Cart from "../components/Cart/Cart";
import { checkoutActions } from "../redux-store/checkout";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../components/Checkout/Checkout";
const CheckoutPage = () => {
  const checkoutModalIsVisible = useSelector((state) => {
    return state.checkout.checkoutModalIsVisible;
  });
  const dispatch = useDispatch();
  return (
    <>
      <Cart></Cart>
      {checkoutModalIsVisible && (
        <Checkout
          onClose={() => {
            dispatch(checkoutActions.hideModal());
          }}
        ></Checkout>
      )}
    </>
  );
};
export default CheckoutPage;
