import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  Divider
} from "@mui/material";
import { Link } from "react-router-dom";
import { MainNav } from "components";

const LoginPage = () => {
  const theme = useTheme();

  const CLIENT_ID = "1311188133119000606";
  const REDIRECT_URI = "http://localhost:3000/auth/discord/callback";

  const handleLogin = () => {
    const discordAuthURL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=identify`;

    window.location.href = discordAuthURL;
  };

  return (
    <Box>
      <MainNav />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            gap: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "2rem",
            borderRadius: "12px",
            mt: 7
          }}
        >
          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: theme.palette.grey[100],
              mb: 5,
              textAlign: "center"
            }}
          >
            Welcome to Soleex BV
          </Typography>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                color: theme.palette.grey[100]
              }
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                color: theme.palette.grey[100]
              }
            }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: theme.palette.third[500],
              color: "black",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 16,
              "&:hover": {
                backgroundColor: theme.palette.third[300]
              }
            }}
          >
            Log In
          </Button>

          {/* Divider */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: 2,
              mb: 2
            }}
          >
            <Divider
              sx={{
                flexGrow: 1,
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }}
            />
            <Typography
              sx={{
                padding: "0 1rem",
                color: "white",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}
            >
              OR
            </Typography>
            <Divider
              sx={{
                flexGrow: 1,
                backgroundColor: "whitrgba(255, 255, 255, 0.2)e"
              }}
            />
          </Box>

          {/* Login with Discord */}
          <Button
            variant="outlined"
            onClick={handleLogin}
            fullWidth
            sx={{
              borderColor: theme.palette.third[500],
              color: theme.palette.grey[100],
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 15,
              "&:hover": {
                borderColor: theme.palette.third[300],
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }
            }}
          >
            Login with Discord
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          sx={{
            marginTop: "2rem",
            color: theme.palette.grey[400],
            fontSize: "0.85rem"
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: theme.palette.third[500],
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
