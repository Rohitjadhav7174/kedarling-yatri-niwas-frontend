import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutJMJ = () => {
  return (
    <Container>
      <Box height={10} />
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#1c1c1c"
        sx={{ lineHeight: "50px" }}
      >
        {/* About JMJ */}
      </Typography>
      <Box height={20} />
      {/* <Typography
        variant="body1"
        align="justify"
        sx={{ fontWeight: 400 }}
      >
        {/* JMJ group is a dynamic group incorporated in 1995 with a single entity that focused on
        perfumery blending and manufacturing of unique essential oil extracts (flavors and
        fragrances) that are used by most of the leading brands of pan masala, chewing tobacco,
        mouth fresheners, incense sticks, and similar products. Within a short span, the group
        diversified into a large conglomerate with a multi-faceted presence which includes
        Manufacturing and Blending of edible Perfumes and Essential Oils, Construction,
        Infrastructure, Hospitality and Health Clubs, Travel and Tourism, FMCG and Packaged
        Drinking Water, Paper Industry, and Entertainment.
      </Typography> */} 
    </Container>
  );
};

export default AboutJMJ;
