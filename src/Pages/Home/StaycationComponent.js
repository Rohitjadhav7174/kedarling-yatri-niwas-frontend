import React from "react";
import { Box, Typography, Grid2 as Grid } from "@mui/material";

const images = [
  "https://planethollywoodthane.com/wp-content/uploads/2022/09/1-2-1.jpg",
  "https://planethollywoodthane.com/wp-content/uploads/2022/09/4-4.jpg",
  "https://planethollywoodthane.com/wp-content/uploads/2022/09/7-3.jpg",
  "https://planethollywoodthane.com/wp-content/uploads/2022/09/8-2.jpg",
  "https://planethollywoodthane.com/wp-content/uploads/2022/09/11-1.jpg",
  "https://planethollywoodthane.com/wp-content/uploads/2022/09/2-4.jpg",
];

const StaycationComponent = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4, backgroundColor: "#f5f5f5" ,justifyContent:"center"}}>
      
      
      <Grid container spacing={2} sx={{ mt: 3, justifyContent: "center" }}>
        {images.map((img, index) => (
          <Grid size={{xs:6,sm:4,md:2}}     key={index}>
            <Box
              component="img"
              src={img}
              alt={`Staycation ${index + 1}`}
              sx={{ width: "100%", height: "auto", }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StaycationComponent;
