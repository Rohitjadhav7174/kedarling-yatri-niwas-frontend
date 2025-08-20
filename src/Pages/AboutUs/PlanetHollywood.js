import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PlanetHollywood = () => {
  return (
    <Container >
      <Box sx={{ height: 10 }} />
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ color: "black", lineHeight: "50px" }}
      >
        At Planet Hollywood, Thane City, we bring to you plush surroundings, luxurious interior and services made to suit your comfort.
      </Typography>
      <Box sx={{ height: 20 }} />
      <Typography
        variant="h6"
        align="center"
        fontWeight={400}
        sx={{ color: "#1c1c1c" }}
      >
        Sustainable practices in our services.
      </Typography>
      <Typography
        variant="h6"
        align="center"
        fontWeight={400}
        sx={{ color: "#1c1c1c" }}
      >
        Installation of solar panels to reduce electricity consumption in certain areas of the hotel.
      </Typography>
      <Typography
        variant="h6"
        align="center"
        fontWeight={400}
        sx={{ color: "#1c1c1c" }}
      >
        Purchasing EV vehicles to reduce our carbon footprint.
      </Typography>
    </Container>
  );
};

export default PlanetHollywood;
