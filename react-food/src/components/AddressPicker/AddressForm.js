import React, { useDebugValue, useRef } from "react";
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
  const handleLocationChage = debounce(() => {
    dispatch(getCoordsFromAddress(locationFieldRef.current.value));
  }, 700);
  return (
    <div>
      <Input
        input={{
          id: "location-search",
          type: "text",
          style: { width: "50%" },
          onChange: handleLocationChage,
        }}
        ref={locationFieldRef}
        label="Location Search"
        className={classes["location-search-input"]}
        flexColumn={true}
      ></Input>
      <div>
        <div>
          <p>Deliver to:</p>
          <p>{finalAddress}</p>
        </div>
        <p>
          Note: we deliver to the pinpoint on the map, the address is
          approximate
        </p>
      </div>
      <Button config={{ type: "submit" }} label="Find restaurants"></Button>
    </div>
  );
};
export default AddressForm;
