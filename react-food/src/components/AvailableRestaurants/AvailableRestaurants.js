import React, { useSyncExternalStore } from "react";
import classes from "./AvailableRestaurants.module.scss";
import Restaurant from "./Restaurant";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { restaurantsActions } from "../../redux-store/restaurants";
const AvailableRestaurants = () => {
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
  };
  return (
    <Modal onClose={closeModal}>
      {sortedRestaurantsArr.map((restaurant) => {
        return (
          <Restaurant
            key={restaurant.placeId}
            name={restaurant.name}
            rating={restaurant.rating.toFixed(1)}
          ></Restaurant>
        );
      })}
    </Modal>
  );
};

export default AvailableRestaurants;
