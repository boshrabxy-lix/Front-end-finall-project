import React from "react";
import { Link, useNavigate, } from 'react-router-dom';
import useAuthStore from "../../store/useAuthStore";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              KASHOP
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
              <Link to={'/'} color="inherit" underline='none'>Home</Link>
              {token ?
                (
                  <>
                    <Link to={'/cart'} color="inherit" underline='none'>Cart</Link>
                    <Link component={'button'} onClick={handleLogout} color="inherit" underline='none'>logout</Link>
                  </>
                ) :
                (
                  <>
                    <Link to={'/login'} color="inherit" underline='none'>Login</Link>
                    <Link to={'/register'} color="inherit" underline='none'>Register</Link>
                    <Link to={'/categories'} color="inherit" underline='none'>Categorier</Link>
                    <Link to={'/register'} color="inherit" underline='none'>Products</Link>
                  </>
                )}
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
