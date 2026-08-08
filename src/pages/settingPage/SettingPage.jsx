import React from 'react'
import { useTranslation } from 'react-i18next';
import { Box, Typography} from "@mui/material";

export default function SettingPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Typography variant='h6'> {t('SettingPage')} </Typography>
      </Box>
    </>

  )
}
