import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import { useUser } from "contexts/user";

const CLIENT_ID = "1311188133119000606";
const CLIENT_SECRET = "8v7QnHoexdDi2aLYQXdUmLEmwpEIZyuI";
const REDIRECT_URI = "http://localhost:3000/auth/discord/callback";
const DISCORD_TOKEN_URL = "https://discord.com/api/oauth2/token";
const DISCORD_USER_URL = "https://discord.com/api/users/@me";

const RedirectDiscord = () => {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (!code) {
        console.error("No authorization code provided.");
        navigate("/login"); // Redirect to login if no code is found
        return;
      }

      try {
        // Exchange authorization code for an access token
        const tokenResponse = await axios.post(
          DISCORD_TOKEN_URL,
          new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );

        const { access_token } = tokenResponse.data;

        // Fetch user information from Discord
        const userResponse = await axios.get(DISCORD_USER_URL, {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        });

        const user = userResponse.data;

        // Log or store the user data
        console.log("Discord User Info:", user);

        updateUser(user);

        // Redirect or update the UI
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during Discord OAuth flow:", error);
        navigate("/login");
      }
    };

    handleOAuthRedirect();
  }, [navigate, updateUser]);

  return <Box></Box>;
};

export default RedirectDiscord;
