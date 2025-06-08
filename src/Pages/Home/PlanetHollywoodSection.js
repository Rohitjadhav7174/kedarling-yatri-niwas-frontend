import React from "react";
import { Box, Typography } from "@mui/material";

const PlanetHollywoodSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        px: 3,
        py: 6,
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          order: { xs: 1, md: 1 }, // Image on top for mobile, left for desktop
        }}
      >
        <img
          src="https://planethollywoodthane.com/wp-content/uploads/2022/10/pht-3.jpg"
          alt="Planet Hollywood"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          order: { xs: 2, md: 2 }, // Text below image on mobile, right on desktop
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            color: "#1c1c1d",
            fontSize: { xs: "40px", md: "80px" },
            lineHeight: { xs: "40px", md: "80px" },
            textAlign: "center",
            mb: 3,
          }}
        >
          Planet Hollywood
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#000",
            padding: { xs: "20px", md: "40px" },
            textAlign: "center",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Get a feel of the celebrity life while vacationing at Planet Hollywood,
          Thane City. Experience luxury, fame, and sophistication at the first
          5-star hotel in Thane and the second of its brand in Asia. Planet
          Hollywood epitomizes what it means to live in the lap of luxury.
          From the moment you step in, be dazzled by the welcoming and vibrant
          look the lobby has to offer, unwind in Hollywood-themed rooms with
          contemporary interiors and experience all bespoke offerings.
          The hotel offers an exciting array of top restaurants serving the
          finest cuisine and top-notch beverages, all with a unique and
          glamorous atmosphere. Adding to the celebrity lifestyle, the hotel
          has a rooftop pool and restaurant for you to soak in the lavishness.
          Planet Hollywood, Thane City is situated in an upmarket
          condominium-style township in the city of lakes.
        </Typography>
      </Box>
    </Box>
  );
};

export default PlanetHollywoodSection;
