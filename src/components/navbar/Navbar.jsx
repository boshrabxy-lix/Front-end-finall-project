import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { AppBar, IconButton, Toolbar, Badge, InputBase, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import { Menu, MenuItem } from '@mui/material';

export default function Navbar() {
  const { t } = useTranslation();
  const { id } = useParams();

  const changeLanguage = (lng) => {
    const newLang = i18n.language == "ar" ? "en" : "ar"
    i18n.changeLanguage(newLang);
  }

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { data } = useCart();
  const cartCount = data?.Items?.length || 0;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  const isMenuOpen = Boolean(menuAnchorElement);

  const openUserMenu = (event) => {
    setMenuAnchorElement(event.currentTarget);
  };

  const closeUserMenu = () => {
    setMenuAnchorElement(null);
  };
  return (
    <Box component={"section"} >
      <AppBar sx={{ position: "static", background: "linear-gradient(90deg, #142244 0%, #1c2f56 100%)" }} >
        <Toolbar sx={{ gap: 2, py: 2, justifyContent: 'space-between', display: 'flex' }}>
          <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
            <IconButton color="inherit" sx={{ display: { xs: "flex", sm: "none" } }} >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ display: { xs: 'block', sm: 'flex' }, fontWeight: 800, letterSpacing: 0.4, color: "#B8C4FF" }} >
              KASHOP
            </Typography>

            <Link
              to={"/"}
              component={RouterLink}
              underline="none"
              sx={{
                color: "#3b82f6",
                fontWeight: 600,
                fontSize: "0.95rem",
                pb: "4px",
                borderBottom: "2px solid #3b82f6",
                display: { xs: "none", sm: 'flex' }
              }}
            >
              {t('Home')}
            </Link>
            <Link
              to={"/categories"}
              component={RouterLink}
              underline="none"
              sx={{
                color: "#cbd5e1",
                fontWeight: 500,
                fontSize: "0.95rem",
                "&:hover": { color: "#ffffff" },
                display: { xs: "none", sm: 'flex' }
              }}
            >
              {t('Categories')}

            </Link>

            <Link
              to={"products"}
              component={RouterLink}
              underline="none"
              sx={{
                color: "#cbd5e1",
                fontWeight: 500,
                fontSize: "0.95rem",
                "&:hover": { color: "#ffffff" },
                display: { xs: "none", sm: 'flex' }
              }}
            >
              {t('Products')}
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: "center",
              gap: 1.5,
              ml: 2,
            }}
          >
            <Box
              sx={{
                display: { xs: "flex",sm:'none',md:'flex' },
                gap: 3,
                alignItems: 'center',
                bgcolor: 'white',
                borderRadius: "20px",
                px: 4,
                py: 0.5,
                maxWidth: 340,
                ml: 3,
              }}
            >
              <SearchIcon sx={{ color: "#595e65d0", fontSize: 20, bgcolor: 'white' }} />
              <InputBase
                placeholder={t('Search for products...')}
                sx={{
                  color: "#000000d0",
                  fontSize: "0.9rem",
                  alignItems: "center",
                  bgcolor: 'white'
                }}
              />
            </Box>

            {token ? (
              <>
                <IconButton
                  component={RouterLink}
                  to={"/cart"}
                  size="small"
                  sx={{ color: "#e2e8f0", display: { sm: "flex" } }}

                >
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>

                <Link
                  component={"button"}
                  onClick={handleLogout}
                  underline="none"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    color: "#cbd5e1",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  {t('Logout')}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/register"}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    color: "#cbd5e1",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  {t('Register')}
                </Link>

                <Link
                  to={"/login"}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    color: "#cbd5e1",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  {t('Login')}

                </Link>
              </>
            )}

            <Button onClick={changeLanguage}>{i18n.language === "AR" ? "EN" : "AR"}</Button>
            <IconButton size="small" sx={{ color: "#e2e8f0" , display: {sm: "flex" },}}  >
              <DarkModeOutlinedIcon fontSize="small" />
            </IconButton>

            <Box>
              <IconButton onClick={openUserMenu} size="small" sx={{ color: "#e2e8f0" }}>
                <PersonSharpIcon />
              </IconButton>
              <Menu
                anchorEl={menuAnchorElement}
                open={isMenuOpen}
                onClose={closeUserMenu}
                sx={{
                  borderRadius: '15px',
                  boxShadow: '2px 10px 25px -5px rgba(16, 15, 86, 0.54)',
                  mt: 1,
                  minWidth: '10px',
                  transition: 'all 0.2s ease',
                  fontSize: '14px',
                  padding: '10px 40px',
                }}
              >
                <MenuItem onClick={closeUserMenu}>Profile</MenuItem>
                <MenuItem onClick={closeUserMenu}>Sitting</MenuItem>
                <hr sx={{ border: '0', borderTop: '2px solid #241f1f46', }} />
                <MenuItem onClick={closeUserMenu} sx={{ color: '#ef4444' }}>Logout</MenuItem>
              </Menu>
            </Box>

          </Box>



        </Toolbar>
      </AppBar>
    </Box>
  );
}
