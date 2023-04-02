import React, { useState, useEffect, useSyncExternalStore } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  useLoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import deliveryIcon from "../../assets/delivery.png";
import {
  googleMapActions,
  getAddressFromCoords,
  getCoordsFromAddress,
  getBoundsFromAddress,
} from "../../redux-store/googleMap";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { getRestaurants } from "./helperFn";
import { restaurantsActions } from "../../redux-store/restaurants";
let map;
const containerStyle = {
  height: "400px",
  borderRadius: "10px",
  zIndex: 1000,
};
const Map = (props) => {
  const dispatch = useDispatch();
  const mapState = useSelector((state) => state.googleMap);
  const mapClickHandler = (e) => {
    const extractedLatLng = JSON.parse(
      JSON.stringify(e.latLng.toJSON(), null, 2)
    );
    dispatch(getAddressFromCoords(extractedLatLng));
    dispatch(googleMapActions.setMarkerPosition(extractedLatLng));
  };
  if (map) {
    map.fitBounds(mapState.bounds, -150);
  }
  const handleMapLoad = (e) => {
    map = e;
    setMapObj(e);
  };
  // dispatch(getBoundsFromAddress(mapState.address));

  const [mapObj, setMapObj] = useState(null);
  const resetBounds = () => {
    return;
    const bounds = {
      east: 90,
      north: 90,
      south: -90,
      west: -90,
    };
    dispatch(googleMapActions.setBounds(bounds));
  };
  useEffect(() => {
    if (!props.shouldExecuteSearch) return;
    const handleClickPula = async () => {
      let restaurants = await getRestaurants(
        mapState.markerPosition,
        mapObj,
        mapState
      );
      dispatch(restaurantsActions.storeRestaurants(restaurants));
      dispatch(restaurantsActions.showModal());
    };
    handleClickPula();
  }, [props.shouldExecuteSearch]);

  return (
    <>
      <div onDoubleClick={resetBounds}>
        <GoogleMap
          onClick={mapClickHandler}
          mapContainerStyle={containerStyle}
          center={mapState.locationCoords}
          onLoad={handleMapLoad}
          zoom={2}
        >
          {mapState.markerPosition.lng && (
            <Marker
              options={{
                opacity: 1,
                title: mapState.address,
                icon: "",
              }}
              position={mapState.markerPosition}
            ></Marker>
          )}
        </GoogleMap>
      </div>
    </>
  );
};

export default Map;
