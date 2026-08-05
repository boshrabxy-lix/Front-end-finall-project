import React from 'react'
import ProfileDetails from './ProfileDetails'
import { Box } from '@mui/material';
import ProfileProdviewer from './profileProdviewer';


export default function ProfileInfo() {
  return (
    <Box>
      <ProfileDetails />
      <ProfileProdviewer />
    </Box>
  )
}
