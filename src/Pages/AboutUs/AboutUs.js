import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import owner1 from "../../Assets/kushappa.jpg";
import owner2 from "../../Assets/rajaram.jpg";
import owner3 from "../../Assets/satyajeet.jpg";
import productionImg from "../../Assets/hotel.jpg"; // Replace with your actual image

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fefefe",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${require("../../Assets/Rankala.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          Welcome to Kedarling 
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, maxWidth: 600, textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
        >
          Where taste meets tradition. Serving Kolhapur with heart since 1955.
        </Typography>
        {/* <Button
          variant="contained"
          sx={{ mt: 4, backgroundColor: "#6a9c89", px: 4, py: 1 }}
        >
          ABOUT US
        </Button> */}
      </Box>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          color: "#4b2e83",
          mt: 6,
          mb: 2,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        About Us
      </Typography>

{/* <h2>About Us</h2> */}
      {/* Detail Section */}
      <Box sx={{ px: 5, py: 8, backgroundColor: "#fff" }}>
        <Typography variant="h5" align="center" gutterBottom>
          The small details make the difference.
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", mb: 5 }}>
          Our tradition is blend of those looking to disconnect from city life and reconnect
          with nature. Surrounded by warmth and legacy, Kedarling offers the perfect place.
        </Typography>
      </Box>

      {/* Hotel Info & Legacy Section */}
      <Box sx={{ px: 5, py: 8, backgroundColor: "#fdfaf6" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Merriweather', serif",
            mb: 4,
          }}
        >
          Most Safe & Rated Hotel In Kolhapur
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ fontFamily: "'Georgia', serif", color: "#333", lineHeight: 1.8 }}>
              <Typography variant="body1" paragraph>
                Since 1955, we are in the bakery industry. Especially in Kolhapur, we have developed an expanding market of delicious & tasty products which people appreciate. We prepare every product hygienically. Considering the growing market of bakery products, we are ready to face upcoming challenges.
              </Typography>
              <Typography variant="body1" paragraph>
                Our state-of-the-art production unit is equipped with the most modern machines for extra production in fewer man hours. The credit of our success goes to <strong>Late H. B. P. Dattoba Kushappa Khade</strong> who established Kedarling Bakery way back in 1955. With a home-based production unit & a sales counter, he started this business.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={productionImg}
              alt="Production Unit"
              style={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Meet the Team Section */}
      <Box sx={{ px: 5, pb: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Meet the Team
        </Typography>
        <Grid container spacing={4} mt={2}>
          {[{
            name: "Kushappa Khade",
            img: owner1,
            desc: "The founder whose restless efforts made Kedarling Bakery a regional icon. His quality consciousness and dedication still inspire our motto today."
          },
          {
            name: "Rajaram Khade",
            img: owner2,
            desc: "Visionary leader behind Kedarling's expansion. Awarded 'Udyog Ratna' for his remarkable contribution to business and society in Kolhapur."
          },
          {
            name: "Satyajeet Khade",
            img: owner3,
            desc: "Known as Bhau Khade, he’s a tech-savvy leader with over 15 years of experience. He is actively involved in the Western India Bakery Association."
          }].map((person, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={2} sx={{ textAlign: "center", p: 3 }}>
                <Avatar
                  src={person.img}
                  alt={person.name}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <CardContent>
                  <Typography variant="h6">{person.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
