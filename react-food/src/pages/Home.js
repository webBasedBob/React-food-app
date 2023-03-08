import React from "react";
import AppSummary from "../components/Home/AppSummary";
import AddressPicker from "../components/AddressPicker/AddressPicker";
import AvailableRestaurants from "../components/AvailableRestaurants/AvailableRestaurants";
import { useSelector } from "react-redux";
const HomePage = () => {
  const modalIsVisible = useSelector(
    (state) => state.restaurants.modalIsVisible
  );
  return (
    <>
      {modalIsVisible && <AvailableRestaurants></AvailableRestaurants>}
      <AddressPicker></AddressPicker>
    </>
  );
  return <AppSummary></AppSummary>;
};

export default HomePage;
