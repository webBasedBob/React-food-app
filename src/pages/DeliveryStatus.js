import React from "react";
import DeliveryStatus from "../components/DeliveryStatus/DeliveryStatus";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import ActionButtons from "../components/DeliveryStatus/ActionButtons";
import { useSelector } from "react-redux";
const DeliveryStatusPage = () => {
  //use state for order modal
  //reuse checkout UI
  //insert a img  - cartoon at the top of the card
  const finishedOrder = useSelector((state) => state.checkout.finalOrder);
  return (
    <Card>
      {finishedOrder ? (
        <>
          <DeliveryStatus></DeliveryStatus>
          <ActionButtons></ActionButtons>
        </>
      ) : (
        <h3>No order placed</h3>
      )}
    </Card>
  );
};
export default DeliveryStatusPage;
