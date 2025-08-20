  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { Navigate } from "react-router-dom";

  import Home from "./Pages/Home/Home";
  import About from "./Pages/AboutUs/About";
  import RoomCard from "./Pages/Home/RoomCard";
  import theme from "./Theme";
  import { ThemeProvider } from "@mui/material/styles";
  import Contactus from "./Pages/Home/Contactus";
  import Gallery from "./Pages/Home/Gallery";
  import AddRoom from "./Pages/Home/AddRoom"
  import HotelBookingForm from "./Pages/Home/BookingForm";
  import AdminDashboard from "./Pages/Home/AdminDashboard";
  function App() {

    
    return (
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Navigate to="/" />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/rooms-card" element={<RoomCard />} />
    <Route path="/Contact" element={<Contactus />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/add-room" element={<AddRoom />} />
        <Route path="/HotelBookingForm" element={<HotelBookingForm />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />


  </Routes>
      </BrowserRouter>
      </ThemeProvider>
    );
  }

  export default App;
