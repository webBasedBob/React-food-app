import React from "react";
import DeliveryStatus from "../components/DeliveryStatus/DeliveryStatus";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import ActionButtons from "../components/DeliveryStatus/ActionButtons";
const DeliveryStatusPage = () => {
  //use state for order modal
  //reuse checkout UI
  //insert a img  - cartoon at the top of the card

  return (
    <Card>
      <DeliveryStatus></DeliveryStatus>
      <ActionButtons></ActionButtons>
    </Card>
  );
};
export default DeliveryStatusPage;
