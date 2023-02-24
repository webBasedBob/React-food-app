import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import classes from "./Root.module.scss";
const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <main className={classes["main-content"]}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};
export default RootLayout;
