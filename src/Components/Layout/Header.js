import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import logo from "../../Assets/PH-Thane-City-purple-PNG-1White.png";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    console.log('Navigating to booking form');
    navigate('/HotelBookingForm'); // ✅ Corrected route
  };

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Rooms", path: "/rooms-card" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/Contact" },
    { name: "Gallery", path: "/Gallery" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ height: 60 }}>
              <img src={logo} alt="Hotel Logo" style={{ height: '100%' }} />
            </Box>
          </motion.div>

          {/* Navigation Links */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.path}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover:after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{
                  ml: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(94, 13, 114, 0.3)',
                  },
                }}
              >
                Book Now
              </Button>
            </Box>
          ) : (
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {navItems.map((item) => (
              <MenuItem key={item.name} onClick={() => {
                handleMenuClose();
                navigate(item.path); // ✅ Navigation on mobile
              }}>
                {item.name}
              </MenuItem>
            ))}
            <MenuItem onClick={() => {
              handleMenuClose();
              handleSubmit();
            }}>
              Book Now
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
