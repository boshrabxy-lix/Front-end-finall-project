
import { Box } from '@mui/material';
import Categories from "../../components/categories/Categories";
import ProductsSection from "../../components/products/ProductsSection";
import Hero from "../../components/hero/Hero";
import ModernCircle from "../../components/modernCircle/ModernCircle";
import StatsSection from "../../components/statsSection/StatsSection";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import ContactFollowSection from "../../components/contactFollowSection/ContactFollowSection";

export default function Home() {

  return (
    <>
      <Box component="div">
        <Hero />
        <FeaturesSection />
        <Categories />
      
        <ProductsSection />
        <StatsSection />
        <ModernCircle />
        <ContactFollowSection />
      </Box>
    </>
  );
}
