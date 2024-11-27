import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined
} from "@mui/icons-material";

import { FlexBetween } from ".";
import profileImage from "assets/profile.jpeg";

import { useUser } from "contexts/user";

// Nav items
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />
  },
  {
    text: "Copy Trading",
    icon: <ShoppingCartOutlined />
  },
  {
    text: "Whitelist",
    icon: <TodayOutlined />
  },
  {
    text: "Blacklist",
    icon: <PointOfSaleOutlined />
  },
  {
    text: "Membership",
    icon: <Groups2Outlined />
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />
  }
  // {
  //   text: "Client Facing",
  //   icon: null
  // },
  // {
  //   text: "Products",
  //   icon: <ShoppingCartOutlined />
  // },
  // {
  //   text: "Customers",
  //   icon: <Groups2Outlined />
  // },
  // {
  //   text: "Transactions",
  //   icon: <ReceiptLongOutlined />
  // },
  // {
  //   text: "Geography",
  //   icon: <PublicOutlined />
  // },
  // {
  //   text: "Sales",
  //   icon: null
  // },
  // {
  //   text: "Overview",
  //   icon: <PointOfSaleOutlined />
  // },
  // {
  //   text: "Daily",
  //   icon: <TodayOutlined />
  // },
  // {
  //   text: "Monthly",
  //   icon: <CalendarMonthOutlined />
  // },
  // {
  //   text: "Breakdown",
  //   icon: <PieChartOutlined />
  // },
  // {
  //   text: "Management",
  //   icon: null
  // },
  // {
  //   text: "Admin",
  //   icon: <AdminPanelSettingsOutlined />
  // },
  // {
  //   text: "Performance",
  //   icon: <TrendingUpOutlined />
  // }
];

// Sidebar
const Sidebar = ({
  userdata,
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  // config
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const { user } = useUser();

  // set active path
  useEffect(() => {
    setActive(pathname.substring(1));
    setActive("dashboard");
  }, [pathname, user]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        // Sidebar
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.third[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 1px 2px rgba(255, 255, 255, 0.2);",
              borderRight: "1px solid rgba(255, 255, 255, 0.2)"
            },
            "& .MuiDrawer-paper::-webkit-scrollbar": {
              width: 0
            }
          }}
        >
          <Box width="100%">
            {/* Brand Info */}
            <Box m="1rem">
              <FlexBetween color={theme.palette.third.main}>
                <Link
                  to="/"
                  style={{
                    color: theme.palette.third.main,
                    textDecoration: "none",
                    width: "100%"
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="0.5rem"
                    justifyContent="center"
                    width="100%"
                  >
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      onClick={() => {
                        navigate("/dashboard");
                        setActive("dashboard");
                      }}
                      sx={{
                        cursor: "pointer"
                      }}
                      title="ECOMVISION"
                    >
                      PumpITup
                    </Typography>
                  </Box>
                </Link>
                {/* Mobile Sidebar Toggle Icon */}
                {!isNonMobile && (
                  <IconButton
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    title="Close Sidebar"
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            {/* Sidebar items */}
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                // lowercase text
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} title={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.third[300]
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            active === lcText
                              ? theme.palette.third[200] // Lighter background on hover
                              : theme.palette.primary[50]
                        },
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.primary[100]
                      }}
                    >
                      {/* icon */}
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.primary[100]
                        }}
                      >
                        {icon}
                      </ListItemIcon>

                      {/* text */}
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* User */}
          <Box pb="1rem">
            <Divider />
            <FlexBetween textTransform="none" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.third[100] }}
                >
                  {user.global_name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.third[200] }}
                >
                  {user.username.slice(0, 5)}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.third[300], fontSize: "25px" }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
