import { Typography } from "@mui/material";
import React from "react";
import Categories from "../../components/categories/Categories";

export default function Home() {
  return (
    <>
      <Typography component="h2" variant="h2">Home</Typography>
      <Categories />
    </>

  );
}
