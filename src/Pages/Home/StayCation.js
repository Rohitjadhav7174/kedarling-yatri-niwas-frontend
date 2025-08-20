import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const Staycation = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          backgroundColor: "#5E0D72", // Solid background color
          color: "#fff",
          minHeight: "100vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          overflow: "hidden", // Prevents unwanted margins
        }}
      >
        <Grid container spacing={0} sx={{ height: "100%", width: "100%", margin: 0 }}>
          {/* Left Side: Image (No Changes) */}
          <Grid item xs={12} md={6} sx={{ display: "flex", pl: 0 }}>
            <Box
              component="img"
              src="https://planethollywoodthane.com/wp-content/uploads/2024/01/collage.jpg"
              alt="Staycation Collage"
              sx={{
                width: "100%",
                height: { xs: "50vh", md: "100vh" }, // Adjusts for smaller screens
                objectFit: "cover", // Ensures the image fully covers its container
                borderRadius: 0, // No border radius
                margin: 0, // No margin
                padding: 0, // No padding
              }}
            />
          </Grid>

          {/* Right Side: Content (Updated Structure) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
              padding: { xs: "30px", md: "80px" },
            }}
          >
            {/* Title Section */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", sm: "50px", md: "80px" },
                lineHeight: { xs: "40px", md: "80px" },
                fontWeight: "normal",
                mb: 1,
              }}
            >
              A Timeless
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", sm: "50px", md: "80px" },
                lineHeight: { xs: "40px", md: "80px" },
                fontWeight: "normal",
                color: "#aa237b",
                mb: 3,
              }}
            >
              Staycation
            </Typography>

            {/* Content Section */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  With 125 rooms, Planet Hollywood, Thane City offers the best of
                  services and amenities so that you experience a memorable stay.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  We offer facilities such as mood lighting, high-speed internet, a
                  mini bar, among many more room services. Unwind and rediscover
                  yourself right here in the City of Lakes!
                </Typography>
              </Grid>
            </Grid>

            {/* Button Section */}
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#aa237b",
                  color: "#fff",
                  padding: { xs: "12px 28px", md: "15px 35px" },
                  fontSize: { xs: "10px", md: "11px" },
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  borderRadius: 0, // No border-radius
                }}
                href="https://staahmax.staah.net/be/indexpackdetail?propertyId=NDgzNA==&individual=true"
              >
                CHECK ALL PACKAGES
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Staycation;
