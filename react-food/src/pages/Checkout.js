import React from "react";
import Cart from "../components/Cart/Cart";
import { checkoutActions } from "../redux-store/checkout";
import { useDispatch, useSelector } from "react-redux";
import AddressPicker from "../components/AddressPicker/AddressPicker";
import AvailableRestaurants from "../components/AvailableRestaurants/AvailableRestaurants";
import { googleMapActions } from "../redux-store/googleMap";
import Checkout from "../components/Checkout/Checkout";
const CheckoutPage = () => {
  const checkoutModalIsVisible = useSelector((state) => {
    return state.checkout.checkoutModalIsVisible;
  });
  const dispatch = useDispatch();
  const restaurantsModalIsShown = useSelector(
    (state) => state.restaurants.modalIsVisible
  );
  const mapModalIsShown = useSelector((state) => state.googleMap.modalIsShown);
  const handleMapModalClose = () => {
    dispatch(googleMapActions.hideModal());
  };
  const handleCheckoutClose = () => {
    dispatch(checkoutActions.hideModal());
  };
  return (
    <>
      <Cart></Cart>
      <AvailableRestaurants
        display={restaurantsModalIsShown}
      ></AvailableRestaurants>
      <Checkout
        onClose={handleCheckoutClose}
        display={checkoutModalIsVisible}
      ></Checkout>
      <AddressPicker
        onClose={handleMapModalClose}
        display={mapModalIsShown}
      ></AddressPicker>
    </>
  );
};
export default CheckoutPage;
