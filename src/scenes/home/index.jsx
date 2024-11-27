import React, { useState, useEffect } from "react";
import { Box, Fab, useTheme } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import {
  MainNav,
  LandingHeader,
  LandingIntro,
  LandingCompetition,
  LandingFaq
} from "components";

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <MainNav />
      <Box id="header">
        <LandingHeader />
      </Box>
      <Box id="defi">
        <LandingIntro />
      </Box>
      <Box id="tools">
        <LandingCompetition />
      </Box>
      <Box id="faq">
        <LandingFaq />
      </Box>

      {showButton && (
        <Fab
          onClick={handleBackToTop}
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: theme.palette.third[500],
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark
            },
            transition: "opacity 0.3s ease-in-out"
          }}
          title="Back to Top"
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </Box>
  );
};

export default Home;
