import React, { useRef } from "react";
import Input from "../UI/Input";
import Card from "../UI/Card";
import classes from "./AddressForm.module.scss";
import Button from "../UI/Button";
import { debounce } from "../../helper-functions/general";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoordsFromAddress,
  googleMapActions,
} from "../../redux-store/googleMap";

const AddressForm = () => {
  const finalAddress = useSelector((state) => state.googleMap.address);
  const locationFieldRef = useRef();
  const dispatch = useDispatch();

  const handleLocationChange = debounce(() => {
    const searchString = locationFieldRef.current.value;
    if (searchString.length < 3) return;
    dispatch(getCoordsFromAddress(searchString));
  }, 700);

  const markerCoords = useSelector((state) => state.googleMap.markerPosition);
  const markerExists = markerCoords.lat !== 0 || markerCoords.lng !== 0;

  return (
    <div className={classes.container}>
      <Input
        input={{
          id: "location-search",
          type: "text",
          style: { width: "50%" },
          onChange: handleLocationChange,
        }}
        ref={locationFieldRef}
        label="Location Search"
        className={classes["location-search-input"]}
        flexColumn={true}
      />
      <div>
        <div className={classes["address-container"]}>
          <p>Deliver to:</p>
          <p>{finalAddress}</p>
        </div>
        <p>
          Note: we deliver to the pinpoint on the map, the address is
          approximate
        </p>
      </div>

      <Button
        config={{ type: "submit", disabled: markerExists ? false : true }}
        label="Find restaurants"
      />
    </div>
  );
};

export default AddressForm;
