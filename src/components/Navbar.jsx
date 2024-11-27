import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  useTheme,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase
} from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  GitHub
} from "@mui/icons-material";

import { FlexBetween } from ".";
import profileImage from "assets/profile.jpeg";
import { useUser } from "contexts/user";

// Navbar
const Navbar = ({ username, isSidebarOpen, setIsSidebarOpen }) => {
  // redux dispatch items
  const dispatch = useDispatch();

  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  // theme
  const theme = useTheme();

  // nav state
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  // handle
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    updateUser(null);
    navigate("/login");
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "0px 1px 2px rgba(255, 255, 255, 0.2);"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween>
          {/* Sidebar Menu */}
          <IconButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            title="Toggle Sidebar"
          >
            <MenuIcon />
          </IconButton>

          {/* Search */}
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            title="Search"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          {/* Source Code */}
          <IconButton
            onClick={() =>
              window.open(
                "http://www.github.com/sanidhyy/mern-admin/",
                "_blank"
              )
            }
            title="Source Code"
          >
            <GitHub sx={{ fontSize: "25px" }} />
          </IconButton>

          {/* Dark/Light Mode */}
          <IconButton onClick={() => dispatch(setMode())} title="Dark Mode">
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>

          {/* Settings */}
          <IconButton title="Setting">
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>

          {/* User */}
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem"
              }}
              title={user.name}
            >
              <Box
                component="img"
                alt="profile"
                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.grey[300] }}
                >
                  {user.global_name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.grey[200] }}
                >
                  {user.username}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.third[300],
                  fontSize: "25px"
                }}
              />
            </Button>

            {/* DropDown */}
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              {/* log out */}
              <MenuItem onClick={handleClose} title="Log Out">
                Log Out
              </MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
