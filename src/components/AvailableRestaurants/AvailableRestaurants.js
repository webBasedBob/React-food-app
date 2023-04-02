import React, { useSyncExternalStore } from "react";
import classes from "./AvailableRestaurants.module.scss";
import Restaurant from "./Restaurant";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { restaurantsActions } from "../../redux-store/restaurants";
import { checkoutActions } from "../../redux-store/checkout";
import { googleMapActions } from "../../redux-store/googleMap";
const AvailableRestaurants = (props) => {
  const dispatch = useDispatch();
  const availableRestaurants = useSelector(
    (state) => state.restaurants.restaurants
  );
  const sortedRestaurantsArr = availableRestaurants
    .slice(0)
    .sort((restaurantA, restaurantB) => {
      const ratingA = restaurantA.rating;
      const ratingB = restaurantB.rating;
      return ratingB - ratingA;
    });
  const closeModal = () => {
    dispatch(restaurantsActions.hideModal());
    dispatch(restaurantsActions.resetState());
    dispatch(googleMapActions.resetState());
  };
  const handleRestaurantClick = (restaurantName) => {
    dispatch(restaurantsActions.setChosenRestaurant(restaurantName));
    dispatch(checkoutActions.displayModal());
    closeModal();
  };
  return (
    <Modal display={props.display} onClose={closeModal}>
      {sortedRestaurantsArr.map((restaurant) => {
        return (
          <Restaurant
            onClick={handleRestaurantClick}
            key={restaurant.placeId}
            name={restaurant.name}
            rating={restaurant.rating.toFixed(1)}
          ></Restaurant>
        );
      })}
      {sortedRestaurantsArr.length === 0 && (
        <h3>No available restaurants found near you</h3>
      )}
    </Modal>
  );
};

export default AvailableRestaurants;
