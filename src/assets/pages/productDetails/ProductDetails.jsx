import React from 'react'
import { useParams } from 'react-router-dom'
import useProdDetails from '../../hooks/useProdDetails';
import { Box, CircularProgress } from '@mui/material';
import Typography from "@mui/material/Typography";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useProdDetails(id);
  console.log(data);

  if (isLoading) return <CircularProgress />
  if (isError) return <Typography color='error'>{error}</Typography>



  return (
    <>
      <Box>
        <Typography >{data.response.name}</Typography>
        <Typography >{data.response.description}</Typography>
        <Typography >{data.response.price}</Typography>
        <Typography >{data.response.rate}</Typography>
      </Box>

    </>

  )
}
