import React from "react";
import { Box, Grid, Card, Typography, CardContent } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import { useTranslation } from "react-i18next";


export default function FeaturesSection() {
  const { t } = useTranslation();
  const features = [
    {
      icon: LocalShippingOutlinedIcon,
      title: t('Free Shipping'),
      subtitle: t('On all orders over $100'),
    },
    {
      icon: SpeedOutlinedIcon,
      title: t('24/7 Support'),
      subtitle: t('Always here to help you'),
    },
    {
      icon: SecurityOutlinedIcon,
      title: t('Secure Payments'),
      subtitle: t('100% safe transactions'),
    },
    {
      icon: UndoOutlinedIcon,
      title: t('Easy Returns'),
      subtitle: t('30-day return policy'),
    },
  ];
  
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, }} >
      <Grid container spacing={2} >
        {features.map(({ icon: Icon, title, subtitle }) => (
          <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={title}>
            <Card
              sx={(theme) => ({
                bgcolor: theme.palette.mode === "dark" ? "#19182a" : "transparent",
                height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                px: 2, py: 3, borderWidth: 1, borderStyle: "solid",
                borderColor: theme.palette.mode === "dark" ? "info.main" : "primary.main",
                borderRadius: "16px",
                boxShadow: "0 4px 16px rgba(17, 17, 17, 0.16)",
                transition:
                  "transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.35s ease, border-color 0.35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "info.dark",
                  boxShadow: `0 14px 28px -14px rgba(92,58,33,0.35)`,
                },
              })}
            >
              <Box
                sx={(theme) => ({
                  width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  background: `linear-gradient(135deg, ${theme.palette.info.main}22, ${theme.palette.info.main}22)`,
                  border: `1px solid ${theme.palette.info.main}55`,
                })}
              >
                <Icon sx={{ fontSize: 26, color: "info.main", }} />
              </Box>

              <CardContent sx={{ px: 0, "&:last-child": { pb: 0, }, }} >
                <Typography sx={{ fontWeight: 600, fontSize: "1.05rem", mb: 0.75, }} >{title}</Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "secondary.main", }} >{subtitle}</Typography>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
