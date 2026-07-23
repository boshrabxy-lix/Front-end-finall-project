import React from "react";
import { Box } from '@mui/material';
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Hero from "../../components/hero/Hero";
import ModernCircle from "../../components/modernCircle/ModernCircle";

export default function Home() {

  return (
    <>
      <Box component="div">
        <Hero />
        <Categories />
        <Products />
        <ModernCircle />
      </Box>
    </>
  );
}
