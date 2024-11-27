import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  useTheme,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  useMediaQuery
} from "@mui/material";
import {
  ArrowDropDownOutlined,
  Menu as MenuIcon,
  Close as CloseIcon,
  AccountBalanceWalletOutlined
} from "@mui/icons-material";

import { FlexBetween } from "components";
import logoImage from "assets/logo.PNG";
import { useUser } from "contexts/user";

const navbarItem = [
  { label: "Features", sectionId: "features" },
  { label: "Defi", sectionId: "defi" },
  { label: "Tools", sectionId: "tools" },
  { label: "FAQ", sectionId: "faq" },
  { label: "Contact", sectionId: "contact" }
];

const MainNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const { user } = useUser();

  const [activeItem, setActiveItem] = useState("Dashboard");
  const [activeButton, setActiveButton] = useState("purchase");

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleNavigationClick = (item) => {
    setActiveItem(item.label);
    handleScrollToSection(item.sectionId);
  };

  const handleDashboardonClick = () => {
    setActiveButton("dashboard");

    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handlePurchaseonClick = () => {
    setActiveButton("purchase");

    if (user) {
      navigate("/purchase");
    } else {
      navigate("/login");
    }
  };

  const handleScrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "transparent",
        boxShadow: "0px 1px 2px rgba(255, 255, 255, 0.2);"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}

        {/* Navigation Links */}
        {isMobile ? (
          <FlexBetween>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: theme.palette.grey[100] }} />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  p: 2,
                  background: theme.palette.background.default,
                  height: "100%"
                }}
              >
                <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
                  <CloseIcon />
                </IconButton>
                <List>
                  {navbarItem.map((item) => (
                    <ListItem
                      key={item.label}
                      button
                      onClick={() => {
                        handleNavigationClick(item);
                        setDrawerOpen(false);
                      }}
                      sx={{
                        color:
                          activeItem === item.label
                            ? theme.palette.third[500]
                            : theme.palette.grey[20],
                        "&:hover": {
                          color: theme.palette.third[500]
                        }
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => handleNavigationClick(item)}
                        style={{
                          textDecoration: "none",
                          color: "inherit"
                        }}
                      >
                        {" "}
                        <ListItemText primary={item.label} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </FlexBetween>
        ) : (
          <FlexBetween>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  marginLeft: 5,
                  cursor: "pointer"
                }}
              >
                <Box
                  component="img"
                  src={logoImage}
                  alt="logo"
                  height="40px"
                  sx={{
                    borderRadius: "20px",
                    mt: "2px"
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "white"
                  }}
                >
                  Soleex BV
                </Typography>
              </Box>
            </Link>

            <List sx={{ display: "flex", gap: "1.5rem", p: 0, ml: 10 }}>
              {navbarItem.map((item) => (
                <ListItem
                  key={item.label}
                  button
                  onClick={() => handleNavigationClick(item)}
                  sx={{
                    p: 0,
                    mr: 3,
                    color:
                      activeItem === item.label
                        ? theme.palette.third[500]
                        : theme.palette.grey[10],
                    fontWeight: activeItem === item.label ? "bold" : "normal",
                    "&:hover": {
                      color: theme.palette.third[500],
                      backgroundColor: "transparent"
                    },
                    "&:active": {
                      color: theme.palette.third[500]
                    },
                    transition: "all 0.2s ease-in-out",
                    borderRadius: "8px"
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => handleNavigationClick(item)}
                    style={{
                      textDecoration: "none",
                      color: "inherit"
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "1rem"
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </FlexBetween>
        )}

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          {/* Wallet */}
          {/* <IconButton title="Connect Wallet">
            <AccountBalanceWalletOutlined sx={{ fontSize: "30px" }} />
          </IconButton> */}

          <Button
            variant="text"
            onClick={handleDashboardonClick}
            sx={{
              fontSize: "0.9rem",
              borderRadius: "50px",
              textTransform: "none",
              color: activeButton === "dashboard" ? "black" : "white",
              backgroundColor:
                activeButton === "dashboard"
                  ? theme.palette.third[500]
                  : "transparent",
              width: "100px",
              "&:hover": {
                backgroundColor: theme.palette.third[100]
              }
            }}
          >
            Dashboard
          </Button>

          <Button
            variant="contained"
            onClick={handlePurchaseonClick}
            sx={{
              fontSize: "0.9rem",
              mr: 5,
              borderRadius: "50px",
              textTransform: "none",
              backgroundColor:
                activeButton === "purchase"
                  ? theme.palette.third[500]
                  : "transparent",
              color: activeButton === "purchase" ? "black" : "white",
              width: "100px",
              "&:hover": {
                backgroundColor: theme.palette.third[100]
              }
            }}
          >
            Purchase
          </Button>

          {/* <FlexBetween> */}
          {/* <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem"
              }}
              title={"Name"}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.grey[100] }}
                >
                  {"User"}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.grey[200] }}
                >
                  {"Designer"}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.third[300],
                  fontSize: "25px"
                }}
              />
            </Button> */}

          {/* DropDown */}
          {/* <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: theme.palette.background.default,
                  width: "135px",
                  ml: "-20px"
                }
              }}
            >
              <MenuItem onClick={handleClose} title="Profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose} title="Log Out">
                Log Out
              </MenuItem>
            </Menu> */}
          {/* </FlexBetween> */}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
