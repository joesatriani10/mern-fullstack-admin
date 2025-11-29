import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import profileImage from "../assets/profile.jpg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdDown = useMediaQuery("(max-width: 900px)");
  const isSmDown = useMediaQuery("(max-width: 600px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: theme.palette.background.default,
        borderBottom: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: isSmDown ? "0.75rem" : 0,
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flex: isSmDown ? "1 1 100%" : "0 0 auto",
            minWidth: 0,
          }}
        >
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{ color: theme.palette.navbar.icon }} />
          </IconButton>
          <Box
            sx={{
              display: isSmDown ? "none" : "flex",
              alignItems: "center",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "9px",
              gap: isMdDown ? "0.75rem" : "1.5rem",
              p: isMdDown ? "0.1rem 0.75rem" : "0.1rem 1.5rem",
              width: isMdDown ? "200px" : "260px",
              border: `1px solid ${theme.palette.navbar.border}`,
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{ color: theme.palette.navbar.text }}
            />
            <IconButton>
              <Search sx={{ color: theme.palette.navbar.icon }} />
            </IconButton>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <FlexBetween
          gap={isMdDown ? "1rem" : "1.5rem"}
          sx={{
            flexWrap: isSmDown ? "wrap" : "nowrap",
            width: isSmDown ? "100%" : "auto",
            justifyContent: isSmDown ? "flex-start" : "flex-end",
          }}
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined
                sx={{ fontSize: "25px", color: theme.palette.navbar.icon }}
              />
            ) : (
              <LightModeOutlined
                sx={{ fontSize: "25px", color: theme.palette.navbar.icon }}
              />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined
              sx={{ fontSize: "25px", color: theme.palette.navbar.icon }}
            />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
                color: theme.palette.navbar.text,
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height={"32px"}
                width={"32px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.85rem"}
                  sx={{ color: theme.palette.navbar.text }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize={"0.65rem"}
                  sx={{ color: theme.palette.navbar.icon }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.navbar.icon, fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
