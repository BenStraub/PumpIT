import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import { image1, image2, image3, image4, image5 } from "assets/home";

const LandingCompetition = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        gap: "2rem"
      }}
    >
      {/* Typography Section */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "1.5rem"
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: theme.palette.third[400] }}
        >
          EASY To Use
        </Typography>
        <Typography
          variant="h1"
          fontWeight="medium"
          sx={{ color: theme.palette.grey[100], marginTop: 3 }}
        >
          Competetive Analytics
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: theme.palette.text.secondary, mt: 3 }}
        >
          Discover some of our amazing works and services.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "3rem",
          width: "93%"
        }}
      >
        <Box
          component="img"
          src={image1}
          alt="Gallery Image 1"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: theme.shadows[3]
          }}
        />
        <Box
          component="img"
          src={image2}
          alt="Gallery Image 2"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: theme.shadows[3]
          }}
        />
        <Box
          component="img"
          src={image3}
          alt="Gallery Image 3"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: theme.shadows[3]
          }}
        />
        <Box
          component="img"
          src={image4}
          alt="Gallery Image 4"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px"
          }}
        />
      </Box>
      <Box
        component="img"
        src={image5}
        alt="Full-Size Image"
        sx={{
          marginBottom: "2rem",
          borderRadius: "12px",
          width: "93%",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          mt: 15
        }}
      />
    </Box>
  );
};

export default LandingCompetition;
