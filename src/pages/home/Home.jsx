import React from "react";
import { Box } from '@mui/material';
import Categories from "../../components/categories/Categories";
import ProductsSection from "../../components/products/ProductsSection";
import Hero from "../../components/hero/Hero";
import ModernCircle from "../../components/modernCircle/ModernCircle";
import StatsSection from "../../components/statsSection/StatsSection";

export default function Home() {

  return (
    <>
      <Box component="div">
        <Hero />
        <Categories />
        <ProductsSection />
        <StatsSection />
        <ModernCircle />
      </Box>
    </>
  );
}
