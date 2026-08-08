import React from 'react'
import ProfileDetails from './ProfileDetails'
import { Box } from '@mui/material';

import ProfileProdviewer from './ProfileProdviewer';


export default function ProfileInfo() {
  return (
    <Box>
      <ProfileDetails />
      <ProfileProdviewer />
    </Box>
  )
}
