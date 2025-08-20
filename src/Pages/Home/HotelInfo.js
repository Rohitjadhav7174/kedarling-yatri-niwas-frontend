// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import kd from "../../Assets/kd.jpg";
// import rankala from "../../Assets/rankala.jpeg";
// import room from "../../Assets/room.jpeg";

// const HotelInfo = () => {
//   return (
//     <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", py: 6 }}>
      
//       {/* Book Direct Section (First Section) */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 4,
//           px: 3,
//           mb: 6,
//         }}
//       >
//         {/* Content Section (Left Side) */}
//         <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
//             Book Direct To Save More
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 3 }}>
//             When you book directly with us, you get the best possible rate on your hotel stay.
//           </Typography>

//           {/* <Button
//             variant="contained"
//             color="primary"
//             href="https://staahmax.staah.net/be/index_be?propertyId=NDgzNA==&individual=true"
//             target="_blank"
//             sx={{
//               fontWeight: "bold",
//               px: 4,
//               py: 1.5,
//               "&:hover": {
//                 backgroundColor: "#b71c1c",
//               },
//             }}
//           >
//             BOOK NOW
//           </Button> */}
//         </Box>

//         {/* Image Section (Right Side) */}
//         <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
//           <img
//             src={kd}
//             alt="Book Direct"
//             style={{
//               width: "100%",
//               maxWidth: "500px",
//               height: "auto",
//             }}
//           />
//         </Box>
//       </Box>

//       {/* Planet Hollywood Section (Second Section) */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 4,
//           px: 3,
//         }}
//       >
//         {/* Image Section (Left Side) */}
//         <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
//           <img
//             src={room}
//             alt="Planet Hollywood"
//             style={{
//               width: "100%",
//               maxWidth: "600px",
//               height: "auto",
//               // borderRadius: "8px",
//             }}
//           />
//         </Box>

//         {/* Content Section (Right Side) */}
//         <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{
//               color: "#1c1c1d",
//               fontSize: { xs: "40px", md: "80px" },
//               lineHeight: { xs: "40px", md: "80px" },
//               textAlign: "center",
//               mb: 3,
//             }}
//           >
//             Kedarling Yatri Nivas
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               color: "#000",
//               fontSize: "16px",
//               lineHeight: "2",
//             }}
//           >
//            Since 1955, we are in bakery industry. Specially in Kolhapur we have developed an expanding market of delicious & tasty products which people appreciate. We prepare every product hygienically. Considering the growing market of bakery products; we are ready to face upcoming challenges. Our state of the art producton unit is equipped with the most modern machines for extra production in less man hours.

// Our state of the art producton unit is equipped with the most modern machines for extra production in less man hours. The credit of our success goes to Late H. B. P. Dattoba Kushappa Khade who established Kedarling Bakery way back in 1955. With a home based production unit & a sales counter, he started this business.
//           </Typography>
//         </Box>
//       </Box>

//       {/* Experience Serenity in the City of Lakes (Now Last Section) */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 4,
//           px: 3,
//           mt: 6,
//         }}
//       >
//         {/* Content Section (Left Side) */}
//         <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
//           <Typography
//             variant="h1"
//             sx={{
//               color: "#1c1c1d",
//               fontSize: { xs: "40px", md: "80px" },
//               lineHeight: { xs: "40px", md: "80px" },
//               fontWeight: "normal",
//               textAlign: "center",
//               mb: 3,
//             }}
//           >
//             Experience Serenity in the City of Lakes
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               color: "#000",
//               padding: "40px",
//               textAlign: "center",
//               fontSize: "16px",
//               lineHeight: "1.6",
//             }}
//           >
//            Rankala Lake is on the western side of Ambabai temple , it is a popular evening spot and recreation centre. This lake was constructed by late Maharajah, Shri Shahu Chhatrapati. The Lake is surrounded by Chaupati and other gardens. In the backdrop stands majestic Shalini Palace. Shalini Palace is the only star-rated Palace Hotel in Maharashtra. Chaupati also brings memories of Chatak daar Bhel-Puri and Ragda-Patties and variety of food snacks. In past, Kolhapur was famous as a centre for Film Industry. Many Marathi movies, Hindi movies have been shot in studios in Kolhapur. ShantKiran Studio on Rankala Lake was shot in numerous movies. This studio was owned by V. Shantaram (V stands Vanakudre), gift to Indian Film industry. Today, those days in history ; are being remembered as golden past.
//           </Typography>

//           <Box sx={{ textAlign: "center", mt: 3 }}>
//             {/* <Button
//               variant="contained"
//               href="/AboutUs"
//               target="_blank"
//               sx={{
//                 // backgroundColor: "#aa237b",
//                 color: "#ffffff",
//                 fontSize: "11px",
//                 fontWeight: "bold",
//                 padding: "15px 35px",
//                 letterSpacing: "2px",
//                 "&:hover": {
//                   backgroundColor: "#8a1a60",
//                 },
//               }}
//             >
//               ABOUT US
//             </Button> */}
//           </Box>
//         </Box>

//         {/* Image Section (Right Side) */}
//         <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
//           <img
//             src={rankala}
//             alt="Serenity in Thane"
//             style={{
//               width: "100%",
//               maxWidth: "500px",
//               height: "auto",
//             }}
//           />
//         </Box>
//       </Box>
      
//     </Box>
//   );
// };

// export default HotelInfo;
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

import kd from "./home.png";
import HomeImg from "./home.jpg";

 import rankala from "../../Assets/Rankala.png";
import room from "../../Assets/rooms.png";
import temple from "../../Assets/Urban Harmony at Sunset (2).png";

// Mock images - replace these with your actual image imports
// const kd = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop";
// const rankala = "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop";
// const room = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop";

const HotelInfo = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: { xs: "0 16px", md: "0 32px" },
        fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "linear-gradient(135deg, #fafbfc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        paddingBottom: "80px",
        boxSizing:"border-box",
      }}
    >
      {/* Floating Background Elements */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(167, 139, 250, 0.05) 70%, transparent 100%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
          top: "5%",
          left: "-5%",
          animation: "floatSlow 12s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, rgba(147, 197, 253, 0.03) 70%, transparent 100%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
          top: "50%",
          right: "-3%",
          animation: "floatSlow 15s ease-in-out infinite 3s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(196, 181, 253, 0.02) 70%, transparent 100%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
          bottom: "20%",
          left: "10%",
          animation: "floatSlow 18s ease-in-out infinite 6s",
        }}
      />

    

      {/* Section 1 - Hotel Introduction */}
      <Box
        id="section-1"
        className="animate-section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "40px", md: "60px", lg: "80px" },
          padding: { xs: "40px 0", md: "80px 0" },
          margin: { xs: "40px 0", md: "60px 0" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", lg: "600px" },
            position: "relative",
            transform: isVisible["section-1"] ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: isVisible["section-1"] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <Box
            component="img"
            src={temple}
                  alt="Mahalaxmi Temple, Kolhapur"

            sx={{
              width: "100%",
              height: { xs: "280px", md: "420px" },
              objectFit: "cover",
              borderRadius: "24px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.03) translateY(-5px)",
                boxShadow: "0 35px 80px rgba(0, 0, 0, 0.15), 0 15px 40px rgba(0, 0, 0, 0.1)",
              },
            }}
          />
        </Box>

        {/* Content Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", lg: "650px" },
            padding: { xs: "32px 24px", md: "48px 40px" },
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
            borderRadius: "28px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            transform: isVisible["section-1"] ? "translateY(0)" : "translateY(40px)",
            opacity: isVisible["section-1"] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.8rem", lg: "3.2rem" },
              fontWeight: 800,
              color: "#1e293b",
              marginBottom: { xs: "20px", md: "28px" },
              lineHeight: "1.15",
              letterSpacing: "-0.01em",
            }}
          >
      Shri Mahalaxmi Temple
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: "1.8",
              color: "#475569",
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            The temple architecture shows traces of Chalukya and Yadava styles. The temple is believed to have been built
      in the 7th century CE, with later additions in the 10th century. The temple complex includes several shrines,
      with the central shrine housing the deity - a 3-foot-high stone sculpture of Goddess Mahalaxmi, adorned with
      ancient jewelry and weighing about 40 kilograms.
          </Typography>
        </Box>
      </Box>

      {/* Section 2 - Our Story */}
      <Box
        id="section-2"
        className="animate-section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row-reverse" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "40px", md: "60px", lg: "80px" },
          padding: { xs: "40px 0", md: "80px 0" },
          margin: { xs: "40px 0", md: "60px 0" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", lg: "600px" },
            position: "relative",
            transform: isVisible["section-2"] ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: isVisible["section-2"] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <Box
            component="img"
            src={room}
            alt="Our Heritage"
            sx={{
              width: "100%",
              height: { xs: "280px", md: "420px" },
              objectFit: "cover",
              borderRadius: "24px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.03) translateY(-5px)",
                boxShadow: "0 35px 80px rgba(0, 0, 0, 0.15), 0 15px 40px rgba(0, 0, 0, 0.1)",
              },
            }}
          />
        </Box>

        {/* Content Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", lg: "650px" },
            padding: { xs: "32px 24px", md: "48px 40px" },
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
            borderRadius: "28px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            transform: isVisible["section-2"] ? "translateY(0)" : "translateY(40px)",
            opacity: isVisible["section-2"] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
              fontWeight: 900,
              background: "linear-gradient(135deg, #1e293b 0%, #475569 50%, #334155 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: { xs: "20px", md: "28px" },
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Our Legacy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: "1.8",
              color: "#475569",
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            Our state-of-the-art production unit is equipped with the most modern machines
            for enhanced production efficiency. The credit of our success goes to Late H. B. P.
            Dattoba Kushappa Khade, who established Kedarling Bakery in 1955. What began as a
            home-based production unit with a simple sales counter has grown into a beloved
            institution that serves the community with pride and dedication.
          </Typography>
        </Box>
      </Box>

      {/* Section 3 - Experience Serenity */}
      <Box
        id="section-3"
        className="animate-section"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "40px", md: "60px", lg: "80px" },
          padding: { xs: "40px 0", md: "80px 0" },
          margin: { xs: "40px 0", md: "60px 0" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", lg: "600px" },
            position: "relative",
            transform: isVisible["section-3"] ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: isVisible["section-3"] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <Box
            component="img"
            src={rankala}
            alt="Rankala Lake Serenity"
            sx={{
              width: "100%",
              height: { xs: "280px", md: "420px" },
              objectFit: "cover",
              borderRadius: "24px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.03) translateY(-5px)",
                boxShadow: "0 35px 80px rgba(0, 0, 0, 0.15), 0 15px 40px rgba(0, 0, 0, 0.1)",
              },
            }}
          />
        </Box>

        {/* Content Container */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", lg: "650px" },
            padding: { xs: "32px 24px", md: "48px 40px" },
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
            borderRadius: "28px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            transform: isVisible["section-3"] ? "translateY(0)" : "translateY(40px)",
            opacity: isVisible["section-3"] ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 900,
              background: "linear-gradient(135deg, #1e293b 0%, #475569 50%, #334155 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: { xs: "20px", md: "28px" },
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            Experience Serenity in the City of Lakes
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: "1.8",
              color: "#475569",
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            Discover the enchanting beauty of Rankala Lake, located on the western side of
            Ambabai temple. This popular evening destination and recreation center was
            constructed by the late Maharajah Shri Shahu Chhatrapati. Surrounded by
            Chaupati and lush gardens, with the majestic Shalini Palace as its backdrop,
            Rankala Lake embodies the rich cultural heritage of Kolhapur - once the
            vibrant center of India's film industry.
          </Typography>
        </Box>
      </Box>

      {/* Section 4 - Mahalaxmi Temple */}
<Box
  id="section-4"
  className="animate-section"
  sx={{
    display: "flex",
    flexDirection: { xs: "column", lg: "row-reverse" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "40px", md: "60px", lg: "80px" },
    padding: { xs: "40px 0", md: "80px 0" },
    margin: { xs: "40px 0", md: "60px 0" },
    position: "relative",
    zIndex: 1,
  }}
>
  {/* Image Container */}
  <Box
    sx={{
      flex: 1,
      maxWidth: { xs: "100%", lg: "600px" },
      position: "relative",
      transform: isVisible["section-4"] ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
      opacity: isVisible["section-4"] ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
    }}
  >
    <Box
      component="img"
      src={kd}
      alt="Kedarling Yatri Nivas"

      sx={{
        width: "100%",
        height: { xs: "280px", md: "420px" },
        objectFit: "cover",
        borderRadius: "24px",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.03) translateY(-5px)",
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.15), 0 15px 40px rgba(0, 0, 0, 0.1)",
        },
      }}
    />
  </Box>

  {/* Content Container */}
  <Box
    sx={{
      flex: 1,
      maxWidth: { xs: "100%", lg: "650px" },
      padding: { xs: "32px 24px", md: "48px 40px" },
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
      borderRadius: "28px",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 0, 0, 0.04)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      transform: isVisible["section-4"] ? "translateY(0)" : "translateY(40px)",
      opacity: isVisible["section-4"] ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
    }}
  >
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
        fontWeight: 900,
        background: "linear-gradient(135deg, #1e293b 0%, #475569 50%, #334155 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: { xs: "20px", md: "28px" },
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
      }}
    >
                  Welcome to Kedarling Yatri Nivas

    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "1rem", md: "1.15rem" },
        lineHeight: "1.8",
        color: "#475569",
        textAlign: "justify",
        fontWeight: 400,
        marginBottom: "20px",
      }}
    >
      The Shri Mahalaxmi Temple of Kolhapur is one of the Shakti Peethas listed in various puranas of Hinduism.
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "1rem", md: "1.15rem" },
        lineHeight: "1.8",
        color: "#475569",
        textAlign: "justify",
        fontWeight: 400,
      }}
    >
      Since 1955, we have been a cornerstone of Kolhapur's hospitality industry.
            Our heritage spans generations, built on a foundation of quality, tradition,
            and unwavering commitment to excellence. From humble beginnings to becoming
            a trusted name, we continue to evolve while maintaining our core values of
            hygiene, taste, and customer satisfaction.
      
    </Typography>
  </Box>
</Box>

      {/* Global Animation Styles */}
      <Box
        component="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes floatSlow {
              0%, 100% { 
                transform: translate(0, 0) rotate(0deg) scale(1); 
              }
              25% { 
                transform: translate(10px, -15px) rotate(1deg) scale(1.02); 
              }
              50% { 
                transform: translate(-5px, -25px) rotate(-0.5deg) scale(0.98); 
              }
              75% { 
                transform: translate(-10px, -10px) rotate(1.5deg) scale(1.01); 
              }
            }
            
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `,
        }}
      />
    </Box>
  );
};

export default HotelInfo;