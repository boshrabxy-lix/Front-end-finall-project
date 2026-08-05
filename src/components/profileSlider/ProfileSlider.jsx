import React, { useState } from 'react'
import { Box, Link, Grid, Typography, Avatar, Badge, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Divider, } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useProfil from '../../hooks/useProfil';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import { Link as RouterLink } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Loader from '../loader/Loader';

export default function ProfileSlider() {
    const { data: user, isError, isLoading, error } = useProfil();
    console.log(user);

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const isActive = activeIndex;

    const logout = useAuthStore((state) => state.logout);
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', border: "1px solid secondary", borderRadius: 3, p: 2, alignItems: "center", textAlign: "center", border: "1px solid #22314f",mb:3 }}>
                    <Box>
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            badgeContent={
                                <IconButton
                                    size="small"
                                    sx={{
                                        bgcolor: "#3b82f6", width: 28, height: 28,
                                        "&:hover": { bgcolor: "#4a82e4" },
                                    }}
                                >
                                    <EditIcon sx={{ fontSize: 14, color: "#fff" }} />
                                </IconButton>
                            }
                        >
                            <Avatar src="" alt={user.fullName} sx={{ width: 100, height: 100, border: "3px solid #3b82f6", bgcolor: "#3b82f6", fontSize: 32, }}>

                            </Avatar>
                        </Badge>
                        <Typography
                            sx={{ color: 'primary.main', fontWeight: 700, fontSize: 20, mt: 2 }}
                        >
                            {user.fullName}
                        </Typography>
                        <Typography sx={{ color: 'secondary.main', fontSize: 13, mt: 0.5 }}>
                            {user.email}
                        </Typography>
                        <Typography sx={{ color: 'secondary.main', fontSize: 13 }}>
                            {user.phoneNumber}
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ border: "1px solid #22314f", borderRadius: 3, p: 1.5, }} >
                    <List>
                        <Link component={RouterLink} to='' underline='none'>
                            <ListItemButton
                                selected={isActive}
                                onClick={() => setActiveIndex(index)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    py: 1.3,
                                    color: "text.secondary",
                                    "&.Mui-selected": {
                                        bgcolor: "#5b93f5",
                                        color: "#fff",
                                        "& .MuiListItemIcon-root": { color: "#fff" },
                                        "&:hover": { bgcolor: "#4a82e4" },
                                    },
                                    "&:hover": {
                                        bgcolor: isActive ? "#4a82e4" : "#1e2c48",
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                                    <InfoOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Info"
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: 14.5 }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link to="orders" component={RouterLink} underline='none'>
                            <ListItemButton
                                selected={isActive}
                                onClick={() => setActiveIndex(index)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    py: 1.3,
                                    color: "text.secondary",
                                    "&.Mui-selected": {
                                        bgcolor: "#5b93f5",
                                        color: "#fff",
                                        "& .MuiListItemIcon-root": { color: "#fff" },
                                        "&:hover": { bgcolor: "#4a82e4" },
                                    },
                                    "&:hover": {
                                        bgcolor: isActive ? "#4a82e4" : "#1e2c48",
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                                    <ShoppingBagOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="My Orders"
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: 14.5 }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link component={RouterLink} to="" underline='none'>
                            <ListItemButton
                                onClick={() => setActiveIndex(index)}
                                selected={isActive}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    py: 1.3,
                                    color: "text.secondary",
                                    "&.Mui-selected": {
                                        bgcolor: "#5b93f5",
                                        color: "#fff",
                                        "& .MuiListItemIcon-root": { color: "#fff" },
                                        "&:hover": { bgcolor: "#4a82e4" },
                                    },
                                    "&:hover": {
                                        bgcolor: isActive ? "#4a82e4" : "#1e2c48",
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                                    <LocalShippingOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Address Book"
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: 14.5 }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link component={RouterLink} to="" underline='none'>
                            <ListItemButton
                                selected={isActive}
                                onClick={() => setActiveIndex(index)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    py: 1.3,
                                    color: "text.secondary",
                                    "&.Mui-selected": {
                                        bgcolor: "#5b93f5",
                                        color: "#fff",
                                        "& .MuiListItemIcon-root": { color: "#fff" },
                                        "&:hover": { bgcolor: "#4a82e4" },
                                    },
                                    "&:hover": {
                                        bgcolor: isActive ? "#4a82e4" : "#1e2c48",
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                                    <CreditCardOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Payment Methods"
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: 14.5 }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link component={RouterLink} to="settings" underline="none" >
                            <ListItemButton
                                selected={isActive}
                                onClick={() => setActiveIndex(index)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    py: 1.3,
                                    color: "text.secondary",
                                    "&.Mui-selected": {
                                        bgcolor: "#5b93f5",
                                        color: "#fff",
                                        "& .MuiListItemIcon-root": { color: "#fff" },
                                        "&:hover": { bgcolor: "#4a82e4" },
                                    },
                                    "&:hover": {
                                        bgcolor: isActive ? "#4a82e4" : "#1e2c48",
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 38, color: "inherit" }}>
                                    <SettingsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Account Settings"
                                    primaryTypographyProps={{ fontWeight: 600, fontSize: 14.5 }}
                                />
                            </ListItemButton>
                        </Link>
                    </List>

                    <Divider sx={{ borderColor: "#22314f", my: 1 }} />

                    <ListItemButton
                        onClick={handleLogout}
                        sx={{
                            borderRadius: 2,
                            color: "#f26161",
                            "&:hover": { bgcolor: "#26283f" },
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 38, color: "#f26161" }}>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Sign Out"
                            primaryTypographyProps={{ fontWeight: 600, fontSize: 14.5 }}
                        />
                    </ListItemButton>
                </Box>
            </Box>
        </>
    )
}
