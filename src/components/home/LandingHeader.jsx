import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  InputBase,
  IconButton
} from "@mui/material";
import { FlexBetween } from "components";
import { Search, ArrowRight } from "@mui/icons-material";

const LandingHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        mt: 13,
        position: "relative"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "30%",
          height: "70%",
          background: `radial-gradient(circle, rgba(61,255,196,0.2) 0%, rgba(11,11,11,0.2) 70%, rgba(11,11,11,0) 90%)`, // Softer gradient
          zIndex: -1,
          transform: "translate(-50%, -50%)"
        }}
      ></Box>
      <FlexBetween
        backgroundColor={theme.palette.background.alt}
        borderRadius="30px"
        gap="1rem"
        p="0.1rem 1.5rem"
        title="Search"
        border={`1px solid ${theme.palette.grey[500]}`}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "30px",
            height: "30px",
            ml: -2,
            borderRadius: "50%",
            backgroundColor: theme.palette.third[300],
            color: theme.palette.common.white
          }}
        >
          <ArrowRight />
        </Box>
        <InputBase placeholder="Click here for more information" />
        <IconButton>
          <Search />
        </IconButton>
      </FlexBetween>

      {/* Main Heading */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: "bold",
          marginBottom: "1rem",
          mt: 5
        }}
      >
        <span style={{ color: theme.palette.third[500] }}>Web3</span>, Made
        Easy.
      </Typography>

      {/* Subtext */}
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: theme.palette.grey[500],
          mb: 10,
          mt: 3,
          maxWidth: "800px",
          lineHeight: 1.5
        }}
      >
        This website will serve as both a branding platform and a dashboard for
        managing digital products and tools gated by a login system.
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: { xs: "column", md: "row" }
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "50px",
            fontSize: "1.2rem",
            textTransform: "none",
            backgroundColor: theme.palette.third[500],
            color: "black",
            "&:hover": {
              backgroundColor: theme.palette.third[100]
            }
          }}
        >
          Purchase
        </Button>
        <FlexBetween
          backgroundColor={theme.palette.grey[800]}
          borderRadius="30px"
          gap="1rem"
          p="0.1rem 1.5rem"
          title="Learn More"
          border={`1px solid ${theme.palette.grey[500]}`}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              ml: -2,
              borderRadius: "50%",
              backgroundColor: theme.palette.third[300],
              color: theme.palette.common.white
            }}
          >
            <ArrowRight />
          </Box>
          <Typography
            sx={{
              color: theme.palette.third[500],
              fontSize: "1rem",
              fontWeight: "500",
              textAlign: "center",
              flexGrow: 1
            }}
          >
            Learn More
          </Typography>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default LandingHeader;
