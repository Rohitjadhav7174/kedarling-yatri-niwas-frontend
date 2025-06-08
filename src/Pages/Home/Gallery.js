import React from "react";
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const galleryItems = [
    {
        title: "Rankala Lake",
        image: require("../../Assets/rankala.jpeg"),
        description: "A serene and historic lake, perfect for evening strolls and paddle boating.",
    },
    {
        title: "Mahalaxmi Temple",
        image: require("../../Assets/mahalaxmi.jpeg"),
        description: "A sacred temple dedicated to Goddess Mahalaxmi, attracting pilgrims all year round.",
    },
    {
        title: "Panhala Fort",
        image: require("../../Assets/panhala.jpeg"),
        description: "A majestic fort offering scenic views and rich Maratha history.",
    },
    {
        title: "Jyotiba Temple",
        image: require("../../Assets/jyotiba.jpeg"),
        description: "Situated on a hilltop, this colorful temple is popular during religious fairs.",
    },
    {
        title: "New Palace Museum",
        image: require("../../Assets/palace.jpeg"),
        description: "The royal palace of Chhatrapati Shahu Maharaj showcasing regal heritage.",
    },
    {
        title: "Dajipur Wildlife Sanctuary",
        image: require("../../Assets/dajipur.jpeg"),
        description: "A nature lover’s paradise with bison, deer, and lush greenery.",
    },
];

const Gallery = () => {
    return (
        <Box sx={{ backgroundColor: "#f7f7f7" }}>
            <Header />

            {/* Space after header */}
            <Box sx={{ mt: 4 }}>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontWeight: 600,
                        mb: 5,
                        color: "#333"
                    }}
                >
                    Explore Local Attractions
                </Typography>

                <Grid container spacing={4} sx={{ px: 4 }}>
                    {galleryItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: "100%", borderRadius: 3 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Space before footer */}
            <Box sx={{ mt: 6 }}>
                <Footer />
            </Box>
        </Box>
    );
};

export default Gallery;
