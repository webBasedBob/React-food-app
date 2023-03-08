import classes from "./Auth.module.scss";
import React, { Component } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { connect } from "react-redux";
import store, { authActions } from "../../redux-store/auth";
import { logInAction, signUpAction } from "../../redux-store/auth";
class Auth extends Component {
  constructor() {
    super();
    this.state = { "auth-method-login": true, email: "", password: "" };
  }
  toggleAuthMethod() {
    this.setState((curState) => {
      return {
        "auth-method-login": !curState["auth-method-login"],
        email: "",
        password: "",
      };
    });
  }
  submitHandler(e) {
    e.preventDefault();
    const userCredentials = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(this.props);
    if (this.state["auth-method-login"]) {
      this.props.logIn(userCredentials);
    }
    if (!this.state["auth-method-login"]) {
      this.props.signIn(userCredentials);
    }
  }
  emailChangeHandler(e) {
    this.setState({ email: e.target.value });
  }
  passwordChangeHandler(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <Modal onClose={this.props.closeAuthModal}>
        <form
          onSubmit={this.submitHandler.bind(this)}
          className={classes.container}
        >
          <Input
            className={classes.input}
            input={{
              id: "email",
              type: "email",
              onChange: this.emailChangeHandler.bind(this),
              value: this.state.email,
            }}
            label="Email"
          ></Input>
          <Input
            className={classes.input}
            input={{
              id: "password",
              type: "password",
              // pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
              onChange: this.passwordChangeHandler.bind(this),
              value: this.state.password,
            }}
            label="Password"
          ></Input>
          <Button
            config={{
              type: "submit",
            }}
            label={this.state["auth-method-login"] ? "Log in" : "Sign up"}
          ></Button>
          <div className={classes["auth-switch-container"]}>
            {this.state["auth-method-login"] ? (
              <p>You don't have an account?</p>
            ) : (
              <p>You already have an account?</p>
            )}
            <Button
              config={{
                onClick: this.toggleAuthMethod.bind(this),
                type: "button",
              }}
              className={classes["auth-switch"]}
              label={
                this.state["auth-method-login"]
                  ? "Sign up instead"
                  : "Log in instead"
              }
            ></Button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatchFn) => {
  return {
    logIn: (userCredentials) => {
      dispatchFn(logInAction(userCredentials));
    },
    signIn: (userCredentials) => {
      dispatchFn(signUpAction(userCredentials));
    },
    closeAuthModal: () => {
      dispatchFn(authActions.hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
