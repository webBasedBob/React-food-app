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
const AddressPicker = () => {
  return (
    <Card>
      <AddressForm></AddressForm>
      <Map></Map>
    </Card>
  );
};

export default AddressPicker;
