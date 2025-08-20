import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button } from "@mui/material";

const slides = [
  {
    title: "Slide 1",
    subtitle: "This is the first slide",
    image: "https://via.placeholder.com/1200x500",
  },
  {
    title: "Slide 2",
    subtitle: "This is the second slide",
    image: "https://via.placeholder.com/1200x500",
  },
  {
    title: "Slide 3",
    subtitle: "This is the third slide",
    image: "https://via.placeholder.com/1200x500",
  },
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", borderRadius: 8 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                {slide.title}
              </Typography>
              <Typography variant="subtitle1">{slide.subtitle}</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomSlider;
