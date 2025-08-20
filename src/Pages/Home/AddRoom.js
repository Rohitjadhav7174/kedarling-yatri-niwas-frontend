import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    room_name: "",
    room_number: "",
    bed_count: "",
    img: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setRoomData((prevState) => ({
        ...prevState,
        img: files[0], // Save the file
      }));
    } else {
      setRoomData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("room_name", roomData.room_name);
    formData.append("room_number", roomData.room_number);
    formData.append("bed_count", roomData.bed_count);
    formData.append("img", roomData.img);

    try {
      const response = await axios.post(
        "http://kedarling-yatri-niwas-backend.vercel.app/api/add-room",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("✅ " + response.data.message);
      setRoomData({
        room_name: "",
        room_number: "",
        bed_count: "",
        img: null,
      });
    } catch (error) {
      setMessage("❌ Failed to add room. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add Room
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Room Name"
          name="room_name"
          fullWidth
          value={roomData.room_name}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Room Number"
          name="room_number"
          fullWidth
          value={roomData.room_number}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Bed Count"
          name="bed_count"
          type="number"
          fullWidth
          value={roomData.bed_count}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleChange}
          required
          style={{ marginBottom: "16px" }}
        />

        <Button type="submit" variant="contained" fullWidth>
          Add Room
        </Button>
      </form>

      {message && (
        <Typography mt={2} color={message.startsWith("✅") ? "green" : "error"}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default AddRoom;
