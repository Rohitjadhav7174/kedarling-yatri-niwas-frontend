import React from "react";

import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
const PageLayout = ({ children }) => {
  return (
    <Box>
      {/* Top Header */}
<Header/>
      {/* Main Header */}
     

      {/* Main Content */}
      {children}
      <Footer/>
    </Box>
  );
};

export default PageLayout;
