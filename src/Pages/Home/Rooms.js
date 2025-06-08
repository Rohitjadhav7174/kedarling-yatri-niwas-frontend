import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Rooom1 from "../../Assets/Room1jpg.jpg"; 
import Room2 from "../../Assets/Room2.jpg"; // Assuming you have a second room image
import Room3 from "../../Assets/Room3.jpg"; // Assuming you have a third room image

const rooms = [
  {
    name: "2 Bed Non AC Room",
    image:Rooom1,
        description:
      "Spanning 260 square feet, the Executive Suite includes a wooden floored master bedroom and a marble bathroom.",
    link: "/rooms-card",
    rating: 4.5,
  },
  {
    name: "2 Bed AC Room",
    image:
Room2,
    description:
      "Spanning 294 square feet, the Superior King includes a wooden floored master bedroom and a marble bathroom.",
    link: "/rooms-card",
    rating: 4.2,
  },
  {
    name: "3 Bed Suit Room Ac",
    image:Room3,
    description:
      "Spanning 294 square feet, the superior twin includes a wooden floored master bedroom and a marble bathroom.",
    link: "/rooms-card",
    rating: 4.0,
  },
];

const Rooms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            color: theme.palette.text.primary,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              margin: "16px auto 0",
            },
          }}
        >
          Our Rooms
        </Typography>
        
        <Grid container spacing={4}>
          {rooms.map((room, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Card sx={{ border: "none", boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={room.image}
                    alt={room.name}
                    sx={{
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  <CardContent
                    sx={{
                      backgroundColor: theme.palette.background.paper,
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {room.name}
                    </Typography>
                    
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Rating
                        value={room.rating}
                        precision={0.5}
                        readOnly
                        sx={{ color: theme.palette.secondary.main }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ ml: 1, color: theme.palette.text.secondary }}
                      >
                        {room.rating}
                      </Typography>
                    </Box>
                    
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{ mb: 3, minHeight: "72px" }}
                    >
                      {room.description}
                    </Typography>

                    <Button
                      component={Link}
                      to={room.link}
                      variant="contained"
                      color="secondary"
                      fullWidth
                      size={isMobile ? "medium" : "large"}
                      sx={{
                        fontWeight: 600,
                        letterSpacing: 1,
                        py: 1.5,
                        borderRadius: 1,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: 3,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Rooms;