import React from "react";
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";

const Contactus = () => {
    return (
        <>
            <Header />
            <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
                <Typography variant="h4" gutterBottom align="center">
                    Contact Us
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Left Side: Info and Map */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Kedarling Yatri Nivas
                            </Typography>
                            <Typography gutterBottom>
                                📍Kolhapur , India
                            </Typography>
                            <Typography gutterBottom>📞 +91 98765 43210</Typography>
                            <Typography gutterBottom>📧 contact@hotelbliss.com</Typography>

                            <Box mt={3}>
                                <iframe
                                    title="kolhapur-resort-location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.284505447001!2d74.23205937477393!3d16.691198384122028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10038e3e66e6f%3A0x14c90e519d85897!2sSayaji%20Hotel%20Kolhapur!5e0!3m2!1sen!2sin!4v1712572023481!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: 8 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Side: Contact Form */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={3} sx={{ padding: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Send Us a Message
                            </Typography>
                            <Box
                                component="form"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                <TextField label="Your Name" variant="outlined" fullWidth />
                                <TextField label="Your Email" variant="outlined" fullWidth />
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                                <Button variant="contained" color="primary">
                                    Send Message
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Contactus;
