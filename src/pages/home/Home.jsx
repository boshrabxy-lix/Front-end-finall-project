import { Typography } from "@mui/material";
import React from "react";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Typography component="h2" variant="h2">{t('Home')}</Typography>
      <Categories />
      <Products />
    </>

  );
}
