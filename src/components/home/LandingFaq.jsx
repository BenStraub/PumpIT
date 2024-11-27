import React, { useState } from "react";
import { Box, Typography, useTheme, IconButton, Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const LandingFaq = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "This platform provides a seamless experience for users to explore and engage with our services."
    },
    {
      question: "How can I sign up?",
      answer:
        "You can sign up by clicking the 'Sign Up' button on the top right corner of the homepage."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        margin: "2rem auto",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: theme.palette.background.default,
        width: "92%"
      }}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{ color: theme.palette.grey[100] }}
      >
        Frequently Asked Questions
      </Typography>

      <Typography
        variant="h5"
        sx={{ color: theme.palette.text.secondary, mt: 1, mb: 5 }}
      >
        Find answers to common inquiries and get the information you need
      </Typography>

      {faqs.map((faq, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: "1rem",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2]
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={() => toggleFaq(index)}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: theme.palette.text.primary }}
            >
              {faq.question}
            </Typography>
            <IconButton>
              {openIndex === index ? (
                <ExpandLess sx={{ color: theme.palette.third[400] }} />
              ) : (
                <ExpandMore sx={{ color: theme.palette.third[400] }} />
              )}
            </IconButton>
          </Box>
          <Collapse in={openIndex === index}>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0.5rem",
                color: theme.palette.text.secondary
              }}
            >
              {faq.answer}
            </Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default LandingFaq;
