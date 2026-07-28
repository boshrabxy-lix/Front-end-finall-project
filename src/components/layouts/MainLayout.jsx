import React from "react";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "../navbar/Navbar";


export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Container  maxWidth="lg">
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}
