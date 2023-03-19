import React from "react";
import shawarma from "../assets/shawarma.png";
import About from "../components/Home/About/About";
import AppSummary from "../components/Home/AppSummary";
import Hero from "../components/Home/Hero/Hero";
import HowItWorks from "../components/Home/HowItWorks/HowItWorks";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import PageWrapper from "../components/UI/PageWrapper";
const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <About />
        <Testimonials />
      </PageWrapper>
      <HowItWorks />
      <PageWrapper></PageWrapper>
    </>
  );
};

export default HomePage;
