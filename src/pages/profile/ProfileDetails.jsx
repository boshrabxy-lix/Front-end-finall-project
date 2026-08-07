import React from 'react'
import { Box, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import useProfil from '../../hooks/useProfil';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Loader from '../../components/loader/Loader';


export default function ProfileDetails() {
  const { data, isError, isLoading, error } = useProfil();
  console.log(data);

 let total = 0;
if (data?.orders) {
  for (let i = 0; i < data.orders.length; i++) {
    total += data.orders[i].amountPaid;
  }
}
  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <>
      <Box sx={{ py: 3 }}>
        <Box sx={{ display: "flex", gap: 2.5, flexWrap: "wrap" }}>
          <Box sx={{ minWidth: 240, border: '1px solid #3b6cf6 ', borderRadius: "10px", p: 2.5, display: "flex", alignItems: "center", gap: 2, }} >
            <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "10px", bgcolor: '#3b6cf6', display: "flex", alignItems: "center", justifyContent: "center", }} >
              <LocalShippingOutlinedIcon sx={{ color: "#fff", fontSize: 22 }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 13, mb: 0.5, color: "text.secondary" }}>
                Active Orders
              </Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700, color: 'primary' }}>
                {data.orders.length} Orders
              </Typography>
            </Box>
          </Box>

          <Box sx={{ minWidth: 240, border: '1px solid #5b9bf7', borderRadius: "10px", p: 2.5, display: "flex", alignItems: "center", gap: 2, }} >
            <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "10px", bgcolor: '#5b9bf7', display: "flex", alignItems: "center", justifyContent: "center", }} >
              <CreditCardOutlinedIcon sx={{ color: "#fff", fontSize: 22 }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 13, mb: 0.5, color: "text.secondary" }}>
                Total Spent
              </Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700 }}>
                {total.toFixed(2)}$
              </Typography>
            </Box>
          </Box>

          <Box sx={{ minWidth: 240, border: ' 1px solid #3b6cf6', borderRadius: "10px", p: 2.5, display: "flex", alignItems: "center", gap: 2, }} >
            <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "10px", bgcolor: "#3b6cf6", display: "flex", alignItems: "center", justifyContent: "center", }} >
              <LoyaltyIcon sx={{ color: "#fff", fontSize: 22 }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 13, mb: 0.5, color: "text.secondary" }}>
                Store Credits
              </Typography>
              <Typography sx={{ fontSize: 22, fontWeight: 700, color: "primary" }}>
                170 pts
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}