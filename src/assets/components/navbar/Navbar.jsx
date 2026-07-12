import React from "react";
import {  useNavigate, } from 'react-router-dom';
import useAuthStore from "../../store/useAuthStore";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "@mui/icons-material";
import {Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KASHOP
          </Typography>

          <Box sx={{ display:{ xs:'none',sm:'flex'} , gap: 2, alignItems: 'center' }}>
            <Link to={'/'} component={RouterLink} color="inherit" underline='none'>Home</Link>
            <Link to={'/categories'} component={RouterLink} color="inherit" underline='none'>Categorier</Link>
            <Link to={'/register'} component={RouterLink} color="inherit" underline='none'>Products</Link>
            <Link to={'/cart'} component={RouterLink} color="inherit" underline='none'>Cart</Link>
            {token ?
              (
                <>
                  
                  <Link component={'button'} component={RouterLink} onClick={handleLogout} color="inherit" underline='none'>logout</Link>
                </>
              ) :
              (
                <>
                  <Link to={'/register'} component={RouterLink} color="inherit" underline='none'>Register</Link>
                  <Link to={'/login'} component={RouterLink} color="inherit" underline='none'>Login</Link>
                </>
              )}
          </Box>

          <IconButton color="inherit" sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

  )
}
