import classes from "./Checkout.module.css";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import { useRef, useState, useContext } from "react";
import InputValidation from "../UI/InputValidation";
import { useSelector } from "react-redux";
const Checkout = (props) => {
  const [evaluationNeeded, setEvaluationNeeded] = useState(false);
  const [formState, setFormState] = useState({});
  const cartCtx = useSelector((state) => {
    return state.cart;
  });
  let formValidity = Object.values(formState).every((elm) => {
    return elm === true;
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formValidity) {
      setEvaluationNeeded(true);
    } else {
      const transformedCartData = {};
      cartCtx.items.forEach((item) => {
        transformedCartData[item.id] = {
          name: item.name,
          amount: item.amount,
          price: item.price,
        };
      });
      const orderData = {
        userInfo: {
          name: nameRef.current.value,
          street: streetRef.current.value,
          postalCode: postalRef.current.value,
          city: cityRef.current.value,
        },
        cartInfo: { ...transformedCartData },
        finalPrice: cartCtx.totalAmount,
      };
      fetch(
        "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );
      props.onCancel();
    }
  };

  let inputValidityCHangeHandler = (id, validity) => {
    setFormState((prevState) => {
      return { ...prevState, [id]: validity };
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <form
        autoComplete="new-pula"
        className={classes.form}
        onSubmit={confirmHandler}
      >
        <InputValidation
          ref={nameRef}
          validatingFn={(inputStr) => {
            return inputStr.trim().length > 0;
          }}
          onValidityChange={inputValidityCHangeHandler}
          evaluationNeeded={evaluationNeeded}
          className={classes.control}
          label="Your Name"
          input={{
            id: "name",
            type: "text",
            autoComplete: "new-pula",
          }}
        ></InputValidation>
        <InputValidation
          ref={streetRef}
          validatingFn={(inputStr) => {
            return inputStr.trim().length > 0;
          }}
          onValidityChange={inputValidityCHangeHandler}
          evaluationNeeded={evaluationNeeded}
          className={classes.control}
          label="Street"
          input={{ id: "street", type: "text", autoComplete: "new-pula" }}
        ></InputValidation>
        <InputValidation
          ref={postalRef}
          validatingFn={(inputStr) => {
            return inputStr.trim().length > 0;
          }}
          onValidityChange={inputValidityCHangeHandler}
          evaluationNeeded={evaluationNeeded}
          className={classes.control}
          label="Postal Code"
          input={{ id: "postal", type: "text" }}
        ></InputValidation>
        <InputValidation
          ref={cityRef}
          validatingFn={(inputStr) => {
            return inputStr.trim().length > 0;
          }}
          onValidityChange={inputValidityCHangeHandler}
          evaluationNeeded={evaluationNeeded}
          className={classes.control}
          label="City"
          input={{ id: "city", type: "text", autoComplete: "new-pula" }}
        ></InputValidation>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
