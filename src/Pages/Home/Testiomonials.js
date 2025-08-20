import { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    name: "Meenakshi J",
    image: "https://planethollywoodthane.com/wp-content/uploads/2023/05/woman-face-expression-clipart-design-illustration-free-png.png",
    text: "We stayed here for a week and had a wonderful time! The rooms were exceptionally clean and the service was awesome! Cafe Hollywood breakfast was very good. Special thanks to Mr. Pradeep and Mr. Abdul!"
  },
  {
    name: "BackPacker270981",
    image: "https://planethollywoodthane.com/wp-content/uploads/2023/05/gamer.png",
    text: "Best stay ever! Really good. Perfectly clean room. Vaibhav and Akshay are the best! They made my stay even better with their friendly attitude."
  },
  {
    name: "DLC",
    image: "https://planethollywoodthane.com/wp-content/uploads/2023/05/gamer.png",
    text: "Nice place for a business trip. Clean rooms and excellent service. Recommended for family or couples. Close to main locations."
  },
  {
    name: "Trek06431443462",
    image: "https://planethollywoodthane.com/wp-content/uploads/2023/05/gamer.png",
    text: "Room service and food were excellent. Enjoyed the evening. Staff was very cooperative. Fantastic amenities including gym and pool."
  },
  {
    name: "Camper05292532437",
    image: "https://planethollywoodthane.com/wp-content/uploads/2023/05/gamer.png",
    text: "Good ambiance and service. Beautiful interior. Food is excellent. Staff is amazing and friendly. Worth the expense."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
      <Typography variant="h4" mb={2}>Testimonials</Typography>
      <Avatar src={testimonials[index].image} sx={{ width: 80, height: 80, margin: "auto" }} />
      <Typography variant="h6" mt={2}>{testimonials[index].name}</Typography>
      <Typography variant="body1" color="textSecondary" mt={1} textAlign="center" maxWidth={500}>
        {testimonials[index].text}
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <IconButton onClick={prevTestimonial}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={nextTestimonial}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}
