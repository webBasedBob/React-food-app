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
import {
  googleMapActions,
  getAddressFromCoords,
  getCoordsFromAddress,
} from "../../redux-store";
import { useSelector, useDispatch } from "react-redux";
import Map from "./Map";
import AddressForm from "./AddressForm";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import { CSSTransition } from "react-transition-group";
import classes from "./AddressPicker.module.scss";
const AddressPicker = (props) => {
  const [executeRestaurantsSearch, setExecuteRestaurantsSearch] =
    useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setExecuteRestaurantsSearch(true);
  };

  return (
    <Modal onClose={props.onClose} display={props.display}>
      <form onSubmit={handleFormSubmit}>
        <AddressForm></AddressForm>
        <Map shouldExecuteSearch={executeRestaurantsSearch}></Map>
      </form>
    </Modal>
  );
};

export default AddressPicker;
