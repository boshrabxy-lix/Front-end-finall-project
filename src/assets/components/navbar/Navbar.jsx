import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { AppBar, IconButton, Toolbar, Badge, InputBase } from "@mui/material";
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

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { data } = useCart();
  const cartCount = data?.Items?.length || 0;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Box component={"section"}>
     <AppBar sx={{ position: "sticky", background: "linear-gradient(90deg, #142244 0%, #1c2f56 100%)", }} >
        <Toolbar sx={{ gap: 4, py: 2 }}>
         <Typography variant="h6" component="div" sx={{ fontWeight: 800, letterSpacing: 0.4, color: "#ffffff" }} >
            KASHOP
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4, alignItems: "center" }}>
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
              }}
            >
              Home
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
              }}
            >
              Categorier
            </Link>
            
            <Link
              to={"/register"}
              component={RouterLink}
              underline="none"
              sx={{
                color: "#cbd5e1",
                fontWeight: 500,
                fontSize: "0.95rem",
                "&:hover": { color: "#ffffff" },
              }}
            >
              Products
            </Link>
          </Box>

          <Box
            sx={{
              display: { sm: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
              bgcolor: "#ffffff14",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              maxWidth: 340,
              ml: 2,
            }}
          >
            <SearchIcon sx={{ color: "#94a3b8", fontSize: 20 }} />
            <InputBase
              placeholder="Search for products..."
              sx={{
                color: "#e2e8f0b1",
                fontSize: "0.9rem",
                alignItems: "center",
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.5,
              ml: 2,
            }}
          >
            <IconButton size="small" sx={{ color: "#e2e8f0" }}>
              <PersonSharpIcon />
            </IconButton>

            {token ? (
              <>
                <IconButton
                  component={RouterLink}
                  to={"/cart"}
                  size="small"
                  sx={{ color: "#e2e8f0" }}
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
                    color: "#cbd5e1",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/register"}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    color: "#cbd5e1",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  Register
                </Link>

                <Link
                  to={"/login"}
                  component={RouterLink}
                  underline="none"
                  sx={{
                    color: "#cbd5e1",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  Login
                </Link>
              </>
            )}

          <IconButton size="small" sx={{ display: { md: "none" }, color: "#e2e8f0" }} >
              <DarkModeOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>

       <IconButton color="inherit" sx={{ display: { xs: "flex", sm: "none" } }} >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
