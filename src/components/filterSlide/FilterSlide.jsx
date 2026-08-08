import React, { useMemo, useState } from 'react';
import { Box, Paper, Stack, TextField, FormControl, Select, MenuItem, Typography, Button, List, ListItemButton, ListItemText, Link, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useCategories from '../../hooks/useCategories';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import useProducts from '../../hooks/useProducts';
import { useTranslation } from 'react-i18next';

export default function FilterSlide({currentCategory, onCategoryChange, onApply }) {
  const { data: category, isError, isLoading, error } = useCategories(100);
  const { data: Products } = useProducts();
  const { t } = useTranslation();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("price"); 
  const [order, setOrder] = useState("asc"); 

const handleApply = () => {
  const newFilter = {
    min: minPrice !== "" ? parseFloat(minPrice) : -Infinity,
    max: maxPrice !== "" ? parseFloat(maxPrice) : Infinity,
    sortBy,
    order,
  };
  onApply(newFilter);
};

  const selectSx = {
    "& .MuiOutlinedInput-notchedOutline": { borderColor: 'primary' },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: 'primary' },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: 'primary' },
  };

  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <>
      <Box>
        <Stack spacing={3}>
          <Paper variant="outlined" sx={{ borderColor: 'secondary', borderRadius: "10px", p: 3 }}>
            <Box>
              <Divider textAlign="left" borderWidth='1.75' borderColor='secendory'>
                <Typography sx={{
                  fontWeight: 600, fontSize: '20px',
                  color: '#3b82f6',
                }}>{t('Filters')}</Typography>
              </Divider>
              <Divider sx={{ borderStyle: 'solid', borderWidth: 1.5, borderColor: 'secendory' }} />
            </Box>

            <Stack spacing={2} sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1.2}>
                <TextField
                 type="number"
                  placeholder={t('Min Price')}
                  size="small"
                  fullWidth
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "6px" } }}
                />
                <TextField
                  placeholder={t('"Max Price"')}
                  size="small"
                  fullWidth
                   type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "6px" } }}
                />
              </Stack>

              <FormControl fullWidth size="small">
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#3b82f6',
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    mb: 0.75,
                  }}
                >
                 {t('Sort By')}
                </Typography>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    selectSx,
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: 'primary' },
                  }}
                >
                  <MenuItem value="Price">Price</MenuItem>
                  <MenuItem value="Name">Name</MenuItem>
                  <MenuItem value="Rating">Rate</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth size="small">
                <Typography
                  sx={{
                    fontSize: 12, fontWeight: 600, color: '#3b82f6', textTransform: "uppercase", letterSpacing: "0.04em", mb: 0.75,
                  }}
                >
                 {t('Order')}
                </Typography>
                
                <Select
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{ selectSx, "& .MuiOutlinedInput-notchedOutline": { borderColor: 'primary' } }}
                >
                  <MenuItem value="asc">{t('Ascending')}</MenuItem>
                  <MenuItem value="desc">{t('Descending')}</MenuItem>
                </Select>
              </FormControl>

              <Button
                fullWidth
                onClick={handleApply}
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: 'primary',
                  borderRadius: "6px",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  py: 1.4,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                {t('APPLY FILTER')}
              </Button>
            </Stack>
          </Paper>

          <Paper variant="outlined" sx={{ borderColor: 'secondary', borderRadius: "10px", p: 2 }}>
            <Box>
              <Divider textAlign="left" borderWidth='1.75' borderColor='secendory'><Typography gutterBottom sx={{
                fontWeight: 600,
                color: '#3b82f6', fontSize: '20px',
              }}>All Categories</Typography></Divider>
              <Divider sx={{ borderStyle: 'solid', borderWidth: 1.5, borderColor: 'secendory' }} />
            </Box>

            <List sx={{ mt: 2, }}>
              {category.response.data.map((category => {
                const isItemActive = category.id === currentCategory.id;
                return (
                  <ListItemButton
                    key={category.id}
                    selected={isItemActive}
                    onClick={() => onCategoryChange(category)}
                    sx={{
                      borderRadius: "6px",
                      mb: 0.5,
                      py: 1.1,
                      px: 1.75,
                      "&.Mui-selected": {
                        bgcolor: "primary.main"
                        , fontWeight: 900, fontSize: 20,
                        "&:hover": { bgcolor: "primary.dark" },
                      },
                    }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: 15,
                        color: isItemActive ? 'primary' : "#1A1A1A",
                      }}
                    >
                      {category.name}
                    </ListItemText>
                  </ListItemButton>
                )
              } ))}
            </List>
          </Paper>
        </Stack>
      </Box>
    </>
  )
}