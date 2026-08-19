import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18next";
import { useTranslation } from "react-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import getTheme from "./Theme";
import useThemeStore from "./store/useThemeStore";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);
AOS.init();
  const queryClient = new QueryClient();
  const mode= useThemeStore((state)=>state.mode);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={getTheme(mode)} >
            <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}