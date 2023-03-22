import React from "react";
import classes from "./Checkout.module.scss";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Info from "./Info";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux-store/cart";
import { checkoutActions } from "../../redux-store/checkout";
import { googleMapActions } from "../../redux-store/googleMap";
import { restaurantsActions } from "../../redux-store/restaurants";
import state from "../../redux-store/index";
const Checkout = (props) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.googleMap.address);
  const restaurant = useSelector((state) => state.restaurants.chosenRestaurant);
  const user = useSelector((state) => state.auth.user);
  const finalPrice = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const createOrderObj = () => {
    const orderObj = {
      username: user?.name,
      items: [...cartItems],
      total: finalPrice,
      address: address,
      restaurant: restaurant,
    };
    return orderObj;
  };

  const countDownTimer = (interval) => {
    let timer = setInterval(() => {
      let interval2 = state.getState().checkout.oneSecondInMiliseconds;
      if (interval2 < interval) {
        clearInterval(timer);
        countDownTimer(interval2);
        return;
      }
      const remainingTime = state.getState().checkout.remainingTime;
      if (remainingTime <= 0) {
        clearInterval(timer);
        return;
      }
      dispatch(checkoutActions.decreaseRemainigTime());
    }, interval);
  };
  const startDeliveryTime = () => {
    countDownTimer(1000);
  };

  const startDeliveryTime2 = () => {
    let timer = setInterval(() => {
      let interval = state.getState().checkout.oneSecondInMiliseconds;
      if (interval < 1000) {
        clearInterval(timer);
        let timer2 = setInterval(() => {
          const remainingTime2 = state.getState().checkout.remainingTime;
          if (remainingTime2 <= 0) {
            clearInterval(timer2);
            return;
          }
          dispatch(checkoutActions.decreaseRemainigTime());
        }, interval);
      }
      const remainingTime = state.getState().checkout.remainingTime;
      if (remainingTime <= 0) {
        clearInterval(timer);
        return;
      }
      dispatch(checkoutActions.decreaseRemainigTime());
    }, 1000);
  };
  const handleConfirmOrder = () => {
    dispatch(checkoutActions.setFinalOrder(createOrderObj()));
    dispatch(checkoutActions.resetState());
    dispatch(googleMapActions.resetState());
    dispatch(restaurantsActions.resetState());
    startDeliveryTime();
    navigate("/delivery-status");
  };

  return (
    <Modal onClose={props.onClose} display={props.display}>
      <div className={classes.wrapper}>
        <div className={classes.cart}>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.finalPrice}
                quantity={item.amount}
                image={item.image}
              ></CartItem>
            );
          })}
        </div>
        <div className={classes["personal-info"]}>
          <Info label="Name:" data={user?.name}></Info>
          <Info label="Address:" data={address}></Info>
          <Info label="Delivered by:" data={restaurant}></Info>
        </div>
        <div className={classes["final-price"]}>
          <Info label="Total" data={`$${finalPrice.toFixed(2)}`}></Info>
        </div>
        <div className={classes.actions}>
          <Button config={{ onClick: props.onClose }} label="Cancel"></Button>
          <Button
            config={{ onClick: handleConfirmOrder }}
            label="Confirm"
          ></Button>
        </div>
      </div>
    </Modal>
  );
};

export default Checkout;
