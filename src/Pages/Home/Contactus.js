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
                                    title="kedarling-yatri-nivas-location"
                                    src="https://www.google.com/maps/embed?pb=!4v1794647881070!6m8!1m7!1sTuoIiE4dnQSIXA1YmbLv6g!2m2!1d16.6945463653094!2d74.21958054196855!3f206.42882515319477!4f18.091205440303895!5f3.325193203789971"
                                    width="100%"
                                    height="350"
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
