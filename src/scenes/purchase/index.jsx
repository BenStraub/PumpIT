import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  useTheme,
  CircularProgress
} from "@mui/material";
import { MainNav } from "components";

const Purchase = () => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedPackage: "basic",
    businessName: "",
    additionalInfo: "",
    agreeToTerms: false,
    promoCode: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle branding package selection
  const handlePackageChange = (e) => {
    setFormData({
      ...formData,
      selectedPackage: e.target.value
    });
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
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
            p: 3,
            mt: 10,
            width: "700px",
            boxShadow: "0 2px 6px rgba(255, 255, 255, 0.2)"
          }}
        >
          <Typography variant="h1" sx={{ mb: 7, textAlign: "center" }}>
            Purchase Page
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Customer Information */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Business Name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* Branding Package Selection */}
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h6">Select Branding Package</Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="basic"
                      checked={formData.selectedPackage === "basic"}
                      onChange={handlePackageChange}
                      name="selectedPackage"
                    />
                  }
                  label="Basic Package"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="premium"
                      checked={formData.selectedPackage === "premium"}
                      onChange={handlePackageChange}
                      name="selectedPackage"
                    />
                  }
                  label="Premium Package"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="custom"
                      checked={formData.selectedPackage === "custom"}
                      onChange={handlePackageChange}
                      name="selectedPackage"
                    />
                  }
                  label="Custom Package"
                />
              </Grid>
            </Grid>

            {/* Additional Information */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>

            {/* Promo Code */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Promo Code (Optional)"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {/* Terms and Agreement */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    name="agreeToTerms"
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!formData.agreeToTerms || loading}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark
                  }
                }}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    sx={{ color: theme.palette.primary.contrastText }}
                  />
                ) : (
                  "Submit Purchase"
                )}
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Purchase;
