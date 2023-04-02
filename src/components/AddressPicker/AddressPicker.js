import React, { useState, useEffect, useSyncExternalStore } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  useGoogleMap,
  InfoBox,
  InfoWindow,
} from "@react-google-maps/api";
import deliveryIcon from "../../assets/delivery.png";
import { googleMapActions } from "../../redux-store/googleMap";
import { useSelector, useDispatch } from "react-redux";
import Map from "./Map";
import AddressForm from "./AddressForm";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import { CSSTransition } from "react-transition-group";
import classes from "./AddressPicker.module.scss";
import { restaurantsActions } from "../../redux-store/restaurants";
const AddressPicker = (props) => {
  const dispatch = useDispatch();
  const shouldSearchForRestaurants = useSelector(
    (state) => state.restaurants.shouldSearchForRestaurants
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(restaurantsActions.setShouldSearchForRestaurants(true));
    dispatch(googleMapActions.hideModal());
  };

  return (
    <Modal onClose={props.onClose} display={props.display}>
      <form onSubmit={handleFormSubmit}>
        <AddressForm></AddressForm>
        <Map shouldExecuteSearch={shouldSearchForRestaurants}></Map>
      </form>
    </Modal>
  );
};

export default AddressPicker;
