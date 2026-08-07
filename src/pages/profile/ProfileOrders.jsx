import React from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Grid } from "@mui/material";
import useProfil from "../../hooks/useProfil";
import Loader from '../../components/loader/Loader';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProfileInfo from "./ProfileDetails";


export default function ProfileOrders() {
  const { data, isError, isLoading, error } = useProfil();

  const STATUS_STYLES = {
    3: { bg: "#3b82f62e", color: "#7dd3fc" },
    Active: { bg: "#22c55e29", color: "#4ade80" },
  };

  if (isLoading) return <Loader />
  if (isError) return <Typography color='error'>{error}</Typography>

  return (
    <Grid size={{ sm: 12 }}>
      <ProfileInfo />

      <Box sx={{ borderRadius: "16px", py: 1, px: 1, border: "1.5px solid ", borderColor: "secondary.main",mb: 3 }} >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, mb: 1, borderBottom: "1.5px solid ", borderColor: "secondary.main", }}>
          <Typography component={'h2'} variant='h4' color="primary" sx={{ fontWeight: 700, pl: 2, py: 1 }}>
            Recent Orders
          </Typography>
        </Box>

        <TableContainer>
          <Table >
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#525a6c",
                  "& th": {
                    color: "#e5e7eb",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  },
                }}
              >
                <TableCell sx={{ borderRadius: "8px 0 0 8px" }}>Order ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>paymentStatus</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell sx={{ borderRadius: "0 8px 8px 0" }} />
              </TableRow>
            </TableHead>


            <TableBody>
              {data.orders.map((order) => (
               <TableRow key={order.id} hover sx={{ cursor: "pointer", }} >
                  <TableCell sx={{ fontWeight: 600 }}>
                    <Typography color="primary" >
                      #ORD-{order.id}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ fontWeight: 600 }}>{order.orderDate}</TableCell>
                  <TableCell align="center">
                    <Typography color="primary" >
                      {order.paymentStatus}
                    </Typography>
                  </TableCell>


                  <TableCell align="center" sx={{ fontWeight: 600, }}>
                    <Typography color="primary" >
                      {order.amountPaid}.00$
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={order.status}
                      size="small"
                      sx={{
                        bgcolor: STATUS_STYLES[order.status]?.bg,
                        color: STATUS_STYLES[order.status]?.color,
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton size="small" sx={{ color: "#626e80" }}>
                      <ChevronRightIcon fontSize="small" />
                    </IconButton>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
}