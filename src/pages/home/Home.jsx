import { Typography } from "@mui/material";
import React from "react";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

export default function Home() {
  return (
    <>
      <Typography component="h2" variant="h2">Home</Typography>
      <Categories />
      <Products/>
    </>

  );
}
