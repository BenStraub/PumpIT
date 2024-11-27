import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Build, HelpOutline, Bolt } from "@mui/icons-material";

import dashboardImage from "assets/dashboard.PNG";

const LandingIntro = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "5rem",
        textAlign: "center",
        background: theme.palette.background.default
      }}
    >
      {/* Responsive Grid */}
      <Grid container spacing={5}>
        {/* Module Part */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              background: theme.palette.grey[1200],
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: `0 4px 8px rgba(255, 255, 255, 0.2)`,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            <Build sx={{ fontSize: 50, color: theme.palette.third[400] }} />
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={2}
              mb={1}
              sx={{ color: theme.palette.text.primary }}
            >
              Modular Design
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              Build flexible, reusable modules for seamless development.
            </Typography>
          </Box>
        </Grid>

        {/* Use Part */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              background: theme.palette.grey[1200],
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: `0 4px 8px rgba(255, 255, 255, 0.2)`,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            <Bolt sx={{ fontSize: 50, color: theme.palette.secondary.dark }} />
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={2}
              mb={1}
              sx={{ color: theme.palette.text.primary }}
            >
              Easy to Use
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              Enjoy an intuitive interface designed for simplicity and speed.
            </Typography>
          </Box>
        </Grid>

        {/* Support Part */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              background: theme.palette.grey[1200],
              padding: "2rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: `0 4px 8px rgba(255, 255, 255, 0.2)`,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            <HelpOutline
              sx={{ fontSize: 50, color: theme.palette.success.dark }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={2}
              mb={1}
              sx={{ color: theme.palette.text.primary }}
            >
              24/7 Support
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              Get help whenever you need it with our dedicated support team.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        component="img"
        alt="profile"
        src={dashboardImage}
        width="100%"
        boxShadow="1px 4px 8px rgba(255, 255, 255, 0.2)"
        borderRadius="10px"
        sx={{ objectFit: "cover", mt: 10 }}
      />
    </Box>
  );
};

export default LandingIntro;
