import React from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton, Grid } from "@mui/material";
import useProfil from "../../hooks/useProfil";
import Loader from '../../components/loader/Loader';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProfileInfo from "./ProfileDetails";
import { useTranslation } from "react-i18next";


export default function ProfileOrders() {
  const { t } = useTranslation();

  const { data, isError, isLoading, error } = useProfil();

  const STATUS_STYLES = {
    Active: { bg: "#c360c56e", color: "#c360c5", labless: 'Pending' },
    2: { bg: "#962d3996", color: "#c81a3a", labless: 'Canceled' },
    3: { bg: "#3b82f62e", color: "#7dd3fc", labless: 'Approved' },
    4: { bg: "#ace45129", color: "#bdac14", labless: 'Shipped' },
    5: { bg: "#226bc529", color: "#4ade80", labless: 'Delivered' },
  };

  const paymentState={
    unpaid:{labels:'Cash' },
    "paid":{labels:'Visa'},
  }


  if (isLoading) return <Loader />
  if (isError) return <Typography color='error'>{error}</Typography>

  return (
    <Grid size={{ sm: 12 }}>
      <ProfileInfo />

      <Box sx={{ borderRadius: "16px", py: 1, px: 1, border: "1.5px solid ", borderColor: "secondary.main", mb: 3 }} >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pb: 2, mb: 1, borderBottom: "1.5px solid ", borderColor: "secondary.main", }}>
          <Typography component={'h2'} variant='h4' color="primary" sx={{ fontWeight: 700, pl: 2, py: 1 }}>
            {t('Recent Orders')}
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
                <TableCell>{t('Date')}</TableCell>
                <TableCell>{t('paymentStatus')}</TableCell>
                <TableCell align="right">{t('Amount')}</TableCell>
                <TableCell>{t('Status')}</TableCell>
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
                    {paymentState[order.paymentStatus]?.labels}
                    </Typography>
                  </TableCell>


                  <TableCell align="center" sx={{ fontWeight: 600, }}>
                    <Typography color="primary" >
                      {order.amountPaid}.00$
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                    label= {STATUS_STYLES[order.status]?.labless}
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