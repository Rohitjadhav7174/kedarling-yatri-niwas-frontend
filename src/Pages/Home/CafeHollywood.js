import React from "react";
import { Container, Grid2 as Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const images = [
  "/images/cafe1.jpg",
  "/images/cafe2.jpg",
  "/images/cafe3.jpg",
];

const CafeHollywood = () => {
  return (
    <Container sx={{ py: 4 }}> {/* Added padding */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
        {/* Left Side: Info */}
        <Grid size={{xs:12,md:6}}  order={{ xs: 2, md: 1 }}> 
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom textAlign="center">
                Café Hollywood
              </Typography>
              <Typography variant="body1" paragraph>
                A perfect place to unwind with a spread of scrumptious food, Café Hollywood caters to a multi-cuisine delight. 
                Treat your taste buds to local and world cuisines through mouth-watering appetizers, aromatic main courses, and decadent desserts.
              </Typography>
              <Typography variant="body1" paragraph>
                For a quick grab and go, Café Hollywood offers an array of juicy burgers and sandwiches. 
                The cafe is open for breakfast, lunch, and dinner and includes vegetarian, vegan, and Jain options.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                READ MORE
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side: Slideshow inside a Card */}
        <Grid size={{xs:12,md:6}} order={{ xs: 1, md: 2 }}> 
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <Carousel>
                {images.map((img, index) => (
                  <img key={index} src={img} alt={`Slide ${index + 1}`} style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }} />
                ))}
              </Carousel>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
};

export default CafeHollywood;
