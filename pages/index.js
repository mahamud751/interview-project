import { Container } from "@mui/material";
import React from "react";
import Faq from "../components/Faq";
import Header from "../components/Header";
import HospitalFeatures from "../components/HospitalFeatures";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

function index() {
  return (
    <Container>
      <Header />
      <Services />
      <HospitalFeatures/>
      <Faq/>
      <Testimonial/>
    </Container>
  );
}

export default index;
