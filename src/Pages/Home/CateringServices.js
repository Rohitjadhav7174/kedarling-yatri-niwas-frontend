import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

const services = [
  {
    title: "Outdoor Catering Service",
    description:
      'Let your celebrations begin with “Fame Creations“ powered by Planet Hollywood Thane. Our culinary artisans believe in quality presentation, service, and value for money. We offer a range of Classic Western, Japanese, South Indian, Goan, desserts, and mixology.',
    image: "https://planethollywoodthane.com/wp-content/uploads/2022/09/fame-logo.png",
    link: "https://planethollywoodthane.com/about-us/",
  },
  {
    title: "Outstation Catering Service",
    description:
      '“Goa by Poseidon’s Cove“ powered by Planet Hollywood Thane is our outstation catering service where we offer a unique Goan Culinary journey to any location PAN India. We strive to provide experiential services and the most delectable traditional specialties for any occasion you may want to celebrate.',
    image: "https://planethollywoodthane.com/wp-content/uploads/2022/09/pos-cove.png",
    link: "https://planethollywoodthane.com/about-us/",
  },
];

const CateringServices = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="space-between" direction="row">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ textAlign: "center", px: 3 }}>
            <Typography variant="h4" gutterBottom>
              {service.title}
            </Typography>
            <img
              src={service.image}
              alt={service.title}
              style={{ width: 200, height: 200, margin: "20px auto" }}
            />
            <Typography variant="body1" sx={{ mb: 3 }}>
              {service.description}
            </Typography>
            <Button
              variant="contained"
              href={service.link}
              sx={{
                backgroundColor: "#aa237b",
                "&:hover": { backgroundColor: "#881961" },
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              Read More
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CateringServices;
