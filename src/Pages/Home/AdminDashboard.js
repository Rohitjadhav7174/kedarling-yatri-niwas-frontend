// // import React, { useState, useEffect } from 'react';
// // import {
// //   Container,
// //   Box,
// //   Typography,
// //   Grid,
// //   Paper,
// //   TextField,
// //   Button,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Select,
// //   MenuItem,
// //   FormControl,
// //   InputLabel,
// //   Card,
// //   CardMedia,
// //   CardContent,
// //   Avatar,
// //   Chip,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   Snackbar,
// //   Alert,
// //   Divider,
// //   IconButton,
// //   Tooltip,
// //   useTheme,
// //   styled
// // } from '@mui/material';
// // import {
// //   Add,
// //   Edit,
// //   Delete,
// //   Visibility,
// //   Lock,
// //   LockOpen,
// //   Hotel,
// //   People,
// //   CalendarToday,
// //   AttachMoney,
// //   Phone,
// //   Email,
// //   Image,
// //   Wifi,
// //   AcUnit,
// //   Tv,
// //   LocalBar,
// //   Bathtub,
// //   RoomService
// // } from '@mui/icons-material';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// // import { useNavigate } from 'react-router-dom';

// // // Styled components
// // const StyledPaper = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(4),
// //   borderRadius: theme.shape.borderRadius * 2,
// //   boxShadow: theme.shadows[10],
// //   background: 'linear-gradient(to bottom right, #f5f7fa, #ffffff)',
// // }));

// // const AdminDashboard = () => {
// //   const theme = useTheme();
// //   const navigate = useNavigate();
// //   const [activeTab, setActiveTab] = useState('rooms');
// //   const [rooms, setRooms] = useState([]);
// //   const [bookings, setBookings] = useState([]);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
// //   const [currentRoom, setCurrentRoom] = useState(null);
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [loginForm, setLoginForm] = useState({ username: '', password: '' });

// //   // Room form state
// //   const [roomForm, setRoomForm] = useState({
// //     roomNumber: '',
// //     roomType: 'standard',
// //     price: '',
// //     capacity: 2,
// //       quantity: 1, // Add this line

// //     description: '',
// //     amenities: [],
// //     images: []
// //   });

// //   // API base URL
// //   const API_BASE_URL = 'http://localhost:5002/api';

// //   // Fetch data from backend
// //   useEffect(() => {
// //     if (isLoggedIn) {
// //       fetchRooms();
// //       fetchBookings();
// //     }
// //   }, [isLoggedIn]);

// //   const fetchRooms = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/rooms`, {
// //         credentials: 'include'
// //       });
// //       if (!response.ok) throw new Error('Failed to fetch rooms');
// //       const data = await response.json();
// //       setRooms(data);
// //     } catch (error) {
// //       showSnackbar(error.message, 'error');
// //     }
// //   };

// //   const fetchBookings = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/bookings`, {
// //         credentials: 'include'
// //       });
// //       if (!response.ok) throw new Error('Failed to fetch bookings');
// //       const data = await response.json();
// //       setBookings(data);
// //     } catch (error) {
// //       showSnackbar(error.message, 'error');
// //     }
// //   };

// //   const handleImageUpload = async (e) => {
// //     const files = e.target.files;
// //     if (!files || files.length === 0) return;

// //     try {
// //       const formData = new FormData();
// //       for (let i = 0; i < files.length; i++) {
// //         formData.append('images', files[i]);
// //       }

// //       const response = await fetch(`${API_BASE_URL}/upload`, {
// //         method: 'POST',
// //         body: formData,
// //         credentials: 'include'
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.message || 'Image upload failed');
// //       }

// //       const data = await response.json();
// //       setRoomForm({
// //         ...roomForm,
// //         images: [...roomForm.images, ...data.urls]
// //       });
// //       showSnackbar('Images uploaded successfully', 'success');
// //     } catch (error) {
// //       showSnackbar(error.message, 'error');
// //     }
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/admin/login`, {
// //         method: 'POST',
// //         headers: { 
// //           'Content-Type': 'application/json',
// //           'Accept': 'application/json'
// //         },
// //         body: JSON.stringify(loginForm),
// //         credentials: 'include'
// //       });
      
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.message || 'Login failed');
// //       }
      
// //       const data = await response.json();
// //       if (data.success) {
// //         setIsLoggedIn(true);
// //         showSnackbar('Login successful', 'success');
// //       } else {
// //         showSnackbar('Invalid credentials', 'error');
// //       }
// //     } catch (error) {
// //       showSnackbar(error.message, 'error');
// //     }
// //   };

// //   const handleRoomSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const method = currentRoom ? 'PUT' : 'POST';
// //       const url = currentRoom ? `${API_BASE_URL}/rooms/${currentRoom._id}` : `${API_BASE_URL}/rooms`;
      
// //       const response = await fetch(url, {
// //         method,
// //         headers: { 
// //           'Content-Type': 'application/json',
// //           'Accept': 'application/json'
// //         },
// //         body: JSON.stringify(roomForm),
// //         credentials: 'include'
// //       });
      
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.message || 'Operation failed');
// //       }
      
// //       const data = await response.json();
// //       if (data.success) {
// //         fetchRooms();
// //         setOpenDialog(false);
// //         showSnackbar(`Room ${currentRoom ? 'updated' : 'added'} successfully`, 'success');
// //       }
// //     } catch (error) {
// //       showSnackbar(error.message, 'error');
// //     }
// //   };

// //   const handleDeleteRoom = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/rooms/${currentRoom._id}`, {
// //         method: 'DELETE',
// //         credentials: 'include'
// //       });
      
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.message || 'Delete failed');
// //       }
      
// //       const data = await response.json();
// //       if (data.success) {
// //         fetchRooms();
// //         setOpenDeleteDialog(false);
// //         showSnackbar('Room deleted successfully', 'success');
// //       }
// //     } catch (error) {
// //       showSnackbar(error.message, 'error');
// //     }
// //   };
// //   const showSnackbar = (message, severity) => {
// //     setSnackbar({ open: true, message, severity });
// //   };

// //   const handleCloseSnackbar = () => {
// //     setSnackbar({ ...snackbar, open: false });
// //   };

// //   const handleAddRoom = () => {
// //     setCurrentRoom(null);
// //     setRoomForm({
// //       roomNumber: '',
// //       roomType: 'standard',
// //       price: '',
// //       capacity: 2,
// //       description: '',
// //       amenities: [],
// //       images: []
// //     });
// //     setOpenDialog(true);
// //   };

// //   const handleEditRoom = (room) => {
// //     setCurrentRoom(room);
// //     setRoomForm({
// //       roomNumber: room.roomNumber,
// //       roomType: room.roomType,
// //       price: room.price,
// //       capacity: room.capacity,
// //       description: room.description,
// //       amenities: room.amenities,
// //       images: room.images
// //     });
// //     setOpenDialog(true);
// //   };

// //   const handleDeleteClick = (room) => {
// //     setCurrentRoom(room);
// //     setOpenDeleteDialog(true);
// //   };

// //   const handleLogout = () => {
// //     setIsLoggedIn(false);
// //     navigate('/admin');
// //   };

// //   const renderAmenityIcon = (amenity) => {
// //     switch (amenity) {
// //       case 'wifi': return <Wifi fontSize="small" />;
// //       case 'ac': return <AcUnit fontSize="small" />;
// //       case 'tv': return <Tv fontSize="small" />;
// //       case 'minibar': return <LocalBar fontSize="small" />;
// //       case 'bathtub': return <Bathtub fontSize="small" />;
// //       case 'roomservice': return <RoomService fontSize="small" />;
// //       default: return null;
// //     }
// //   };

// //   if (!isLoggedIn) {
// //     return (
// //       <Container maxWidth="xs" sx={{ mt: 8 }}>
// //         <StyledPaper elevation={3}>
// //           <Box sx={{ textAlign: 'center', mb: 4 }}>
// //             <Hotel color="primary" sx={{ fontSize: 60 }} />
// //             <Typography variant="h4" component="h1" gutterBottom>
// //               Admin Login
// //             </Typography>
// //           </Box>
          
// //           <form onSubmit={handleLogin}>
// //             <TextField
// //               fullWidth
// //               label="Username"
// //               variant="outlined"
// //               margin="normal"
// //               value={loginForm.username}
// //               onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
// //               required
// //             />
// //             <TextField
// //               fullWidth
// //               label="Password"
// //               type="password"
// //               variant="outlined"
// //               margin="normal"
// //               value={loginForm.password}
// //               onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
// //               required
// //             />
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               color="primary"
// //               size="large"
// //               sx={{ mt: 3, mb: 2 }}
// //             >
// //               Login
// //             </Button>
// //           </form>
// //         </StyledPaper>
// //       </Container>
// //     );
// //   }

// //   return (
// //     <Container maxWidth="lg" sx={{ py: 4 }}>
// //       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
// //         <Typography variant="h4" component="h1">
// //           Hotel Admin Panel
// //         </Typography>
// //         <Button variant="outlined" color="error" onClick={handleLogout}>
// //           Logout
// //         </Button>
// //       </Box>

// //       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
// //         <Button
// //           variant={activeTab === 'rooms' ? 'contained' : 'text'}
// //           onClick={() => setActiveTab('rooms')}
// //           startIcon={<Hotel />}
// //           sx={{ mr: 2 }}
// //         >
// //           Rooms
// //         </Button>
// //         <Button
// //           variant={activeTab === 'bookings' ? 'contained' : 'text'}
// //           onClick={() => setActiveTab('bookings')}
// //           startIcon={<CalendarToday />}
// //           sx={{ mr: 2 }}
// //         >
// //           Bookings
// //         </Button>
// //       </Box>

// //       {activeTab === 'rooms' && (
// //         <>
// //           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
// //             <Button variant="contained" startIcon={<Add />} onClick={handleAddRoom}>
// //               Add Room
// //             </Button>
// //           </Box>

// //           <Grid container spacing={3}>
// //             {rooms.map((room) => (
// //               <Grid item xs={12} sm={6} md={4} key={room._id}>
// //                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// //                   <CardMedia
// //                     component="img"
// //                     height="200"
// //                     image={room.images[0] || '/placeholder-room.jpg'}
// //                     alt={room.roomNumber}
// //                   />
// //                   <CardContent sx={{ flexGrow: 1 }}>
// //                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
// //                       <Typography variant="h6" component="h3">
// //                         {room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)} Room
// //                       </Typography>
// //                       <Chip label={`Room ${room.roomNumber}`} color="primary" size="small" />
// //                     </Box>
// //                     <Typography variant="subtitle1" color="text.secondary" gutterBottom>
// //                       ₹{room.price.toLocaleString('en-IN')} per night
// //                     </Typography>
// //                     <Typography variant="body2" paragraph>
// //                       {room.description}
// //                     </Typography>
// //                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// //                       {room.amenities.map((amenity, index) => (
// //                         <Tooltip key={index} title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}>
// //                           <Chip
// //                             icon={renderAmenityIcon(amenity)}
// //                             size="small"
// //                             sx={{ textTransform: 'capitalize' }}
// //                           />
// //                         </Tooltip>
// //                       ))}
// //                     </Box>
// //                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
// //                       <Button
// //                         variant="outlined"
// //                         startIcon={<Edit />}
// //                         onClick={() => handleEditRoom(room)}
// //                         size="small"
// //                       >
// //                         Edit
// //                       </Button>
// //                       <Button
// //                         variant="outlined"
// //                         color="error"
// //                         startIcon={<Delete />}
// //                         onClick={() => handleDeleteClick(room)}
// //                         size="small"
// //                       >
// //                         Delete
// //                       </Button>
// //                     </Box>
// //                   </CardContent>
// //                 </Card>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </>
// //       )}

// //       {activeTab === 'bookings' && (
// //         <TableContainer component={Paper}>
// //           <Table>
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>Booking ID</TableCell>
// //                 <TableCell>Guest</TableCell>
// //                 <TableCell>Room</TableCell>
// //                 <TableCell>Dates</TableCell>
// //                 <TableCell>Status</TableCell>
// //                 <TableCell>Total</TableCell>
// //                 <TableCell>Actions</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {bookings.map((booking) => (
// //                 <TableRow key={booking._id}>
// //                   <TableCell>{booking._id.substring(0, 8)}</TableCell>
// //                   <TableCell>
// //                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //                       <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
// //                         {booking.guestName.charAt(0)}
// //                       </Avatar>
// //                       {booking.guestName}
// //                     </Box>
// //                     <Typography variant="body2" color="text.secondary">
// //                       <Phone fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
// //                       {booking.guestPhone}
// //                     </Typography>
// //                   </TableCell>
// //                   <TableCell>
// //                     Room {booking.roomNumber}
// //                     <Typography variant="body2" color="text.secondary">
// //                       {booking.roomType}
// //                     </Typography>
// //                   </TableCell>
// //                   <TableCell>
// //                     {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
// //                     <Typography variant="body2" color="text.secondary">
// //                       {booking.nights} nights
// //                     </Typography>
// //                   </TableCell>
// //                   <TableCell>
// //                     <Chip
// //                       label={booking.status}
// //                       color={
// //                         booking.status === 'confirmed' ? 'success' :
// //                         booking.status === 'pending' ? 'warning' : 'error'
// //                       }
// //                       size="small"
// //                     />
// //                   </TableCell>
// //                   <TableCell>
// //                     ₹{booking.totalAmount.toLocaleString('en-IN')}
// //                   </TableCell>
// //                   <TableCell>
// //                     <IconButton>
// //                       <Visibility color="primary" />
// //                     </IconButton>
// //                     <IconButton>
// //                       {booking.status === 'confirmed' ? (
// //                         <Lock color="success" />
// //                       ) : (
// //                         <LockOpen color="action" />
// //                       )}
// //                     </IconButton>
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       )}

// //       {/* Add/Edit Room Dialog */}
// //       <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
// //         <DialogTitle>
// //           {currentRoom ? 'Edit Room' : 'Add New Room'}
// //         </DialogTitle>
// //         <DialogContent>
// //           <form onSubmit={handleRoomSubmit}>
// //             <Grid container spacing={3} sx={{ mt: 1 }}>
// //               <Grid item xs={12} md={6}>
// //                 <TextField
// //                   fullWidth
// //                   label="Room Number"
// //                   value={roomForm.roomNumber}
// //                   onChange={(e) => setRoomForm({...roomForm, roomNumber: e.target.value})}
// //                   required
// //                 />
// //               </Grid>
// //               <Grid item xs={12} md={6}>
// //                 <FormControl fullWidth>
// //                   <InputLabel>Room Type</InputLabel>
// //                   <Select
// //                     value={roomForm.roomType}
// //                     label="Room Type"
// //                     onChange={(e) => setRoomForm({...roomForm, roomType: e.target.value})}
// //                     required
// //                   >
// //                     <MenuItem value="standard">Standard</MenuItem>
// //                     <MenuItem value="deluxe">Deluxe</MenuItem>
// //                     <MenuItem value="suite">Suite</MenuItem>
// //                     <MenuItem value="executive">Executive</MenuItem>
// //                     <MenuItem value="presidential">Presidential</MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Grid>
// //               <Grid item xs={12} md={6}>
// //   <TextField
// //     fullWidth
// //     label="Number of Rooms Available"
// //     type="number"
// //     value={roomForm.quantity}
// //     onChange={(e) => setRoomForm({...roomForm, quantity: e.target.value})}
// //     inputProps={{ min: 1 }}
// //     required
// //   />
// // </Grid>
// //               <Grid item xs={12} md={6}>
// //                 <TextField
// //                   fullWidth
// //                   label="Price per night (₹)"
// //                   type="number"
// //                   value={roomForm.price}
// //                   onChange={(e) => setRoomForm({...roomForm, price: e.target.value})}
// //                   required
// //                 />
// //               </Grid>
// //               <Grid item xs={12} md={6}>
// //                 <FormControl fullWidth>
// //                   <InputLabel>Capacity</InputLabel>
// //                   <Select
// //                     value={roomForm.capacity}
// //                     label="Capacity"
// //                     onChange={(e) => setRoomForm({...roomForm, capacity: e.target.value})}
// //                     required
// //                   >
// //                     <MenuItem value={1}>1 Adult</MenuItem>
// //                     <MenuItem value={2}>2 Adults</MenuItem>
// //                     <MenuItem value={3}>3 Adults</MenuItem>
// //                     <MenuItem value={4}>4 Adults</MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   fullWidth
// //                   label="Description"
// //                   multiline
// //                   rows={4}
// //                   value={roomForm.description}
// //                   onChange={(e) => setRoomForm({...roomForm, description: e.target.value})}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <FormControl fullWidth>
// //                   <InputLabel>Amenities</InputLabel>
// //                   <Select
// //                     multiple
// //                     value={roomForm.amenities}
// //                     onChange={(e) => setRoomForm({...roomForm, amenities: e.target.value})}
// //                     renderValue={(selected) => (
// //                       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
// //                         {selected.map((value) => (
// //                           <Chip key={value} label={value} size="small" />
// //                         ))}
// //                       </Box>
// //                     )}
// //                   >
// //                     {['wifi', 'ac', 'tv', 'minibar', 'bathtub', 'roomservice'].map((amenity) => (
// //                       <MenuItem key={amenity} value={amenity}>
// //                         {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
// //                       </MenuItem>
// //                     ))}
// //                   </Select>
// //                 </FormControl>
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <Button 
// //     variant="contained" 
// //     component="label" 
// //     startIcon={<Image />}
// //     sx={{ mb: 2 }}
// //   >
// //     Upload Images
// //     <input 
// //       type="file" 
// //       hidden 
// //       multiple 
// //       onChange={handleImageUpload}
// //       accept="image/*"
// //     />
// //   </Button>
// //   {roomForm.images.length > 0 && (
// //     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
// //       {roomForm.images.map((image, index) => (
// //         <Box key={index} sx={{ position: 'relative' }}>
// //           <img 
// //             src={image.startsWith('http') ? image : `${API_BASE_URL}/uploads/${image}`}
// //             alt={`Room image ${index + 1}`}
// //             style={{ 
// //               width: 100, 
// //               height: 100, 
// //               objectFit: 'cover',
// //               borderRadius: theme.shape.borderRadius
// //             }}
// //             onError={(e) => {
// //               e.target.src = "https://via.placeholder.com/100?text=Image+Error";
// //             }}
// //           />
// //           <IconButton
// //             size="small"
// //             sx={{
// //               position: 'absolute',
// //               top: 0,
// //               right: 0,
// //               backgroundColor: theme.palette.error.main,
// //               color: theme.palette.error.contrastText,
// //               '&:hover': {
// //                 backgroundColor: theme.palette.error.dark
// //               }
// //             }}
// //             onClick={() => {
// //               setRoomForm({
// //                 ...roomForm,
// //                 images: roomForm.images.filter((_, i) => i !== index)
// //               });
// //             }}
// //           >
// //             <Delete fontSize="small" />
// //           </IconButton>
// //         </Box>
// //       ))}
// //     </Box>
// //   )}
// //               </Grid>
// //             </Grid>
// //           </form>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
// //           <Button onClick={handleRoomSubmit} variant="contained" color="primary">
// //             {currentRoom ? 'Update' : 'Add'} Room
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Delete Confirmation Dialog */}
// //       <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
// //         <DialogTitle>Confirm Delete</DialogTitle>
// //         <DialogContent>
// //           <Typography>
// //             Are you sure you want to delete Room {currentRoom?.roomNumber} ({currentRoom?.roomType})?
// //           </Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
// //           <Button onClick={handleDeleteRoom} variant="contained" color="error">
// //             Delete
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Snackbar */}
// //       <Snackbar
// //         open={snackbar.open}
// //         autoHideDuration={6000}
// //         onClose={handleCloseSnackbar}
// //       >
// //         <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
// //           {snackbar.message}
// //         </Alert>
// //       </Snackbar>

      
// //     </Container>
// //   );
// // };

// // export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   TextField,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Card,
//   CardMedia,
//   CardContent,
//   Avatar,
//   Chip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Snackbar,
//   Alert,
//   Divider,
//   IconButton,
//   Tooltip,
//   useTheme,
//   styled
// } from '@mui/material';
// import {
//   Add,
//   Edit,
//   Delete,
//   Visibility,
//   Lock,
//   LockOpen,
//   Hotel,
//   People,
//   CalendarToday,
//   AttachMoney,
//   Phone,
//   Email,
//   Image,
//   Wifi,
//   AcUnit,
//   Tv,
//   LocalBar,
//   Bathtub,
//   RoomService
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius * 2,
//   boxShadow: theme.shadows[10],
//   background: 'linear-gradient(to bottom right, #f5f7fa, #ffffff)',
// }));

// const AdminDashboard = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('rooms');
//   const [rooms, setRooms] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
//   const [currentRoom, setCurrentRoom] = useState(null);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loginForm, setLoginForm] = useState({ username: '', password: '' });

//   const [roomForm, setRoomForm] = useState({
//     roomNumber: '',
//     roomType: 'standard',
//     price: '',
//     capacity: 2,
//     quantity: 1,
//     description: '',
//     amenities: [],
//     images: []
//   });

//   const API_BASE_URL = 'http://localhost:5002/api';

//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchRooms();
//       fetchBookings();
//     }
//   }, [isLoggedIn]);

//   const fetchRooms = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/rooms`, {
//         credentials: 'include'
//       });
//       if (!response.ok) throw new Error('Failed to fetch rooms');
//       const data = await response.json();
//       setRooms(data);
//     } catch (error) {
//       showSnackbar(error.message, 'error');
//     }
//   };

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/bookings`, {
//         credentials: 'include'
//       });
//       if (!response.ok) throw new Error('Failed to fetch bookings');
//       const data = await response.json();
//       setBookings(data);
//     } catch (error) {
//       showSnackbar(error.message, 'error');
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     try {
//       const formData = new FormData();
//       for (let i = 0; i < files.length; i++) {
//         formData.append('images', files[i]);
//       }

//       const response = await fetch(`${API_BASE_URL}/upload`, {
//         method: 'POST',
//         body: formData,
//         credentials: 'include'
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Image upload failed');
//       }

//       const data = await response.json();
//       setRoomForm({
//         ...roomForm,
//         images: [...roomForm.images, ...data.urls]
//       });
//       showSnackbar('Images uploaded successfully', 'success');
//     } catch (error) {
//       showSnackbar(error.message, 'error');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${API_BASE_URL}/admin/login`, {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(loginForm),
//         credentials: 'include'
//       });
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed');
//       }
      
//       const data = await response.json();
//       if (data.success) {
//         setIsLoggedIn(true);
//         showSnackbar('Login successful', 'success');
//       } else {
//         showSnackbar('Invalid credentials', 'error');
//       }
//     } catch (error) {
//       showSnackbar(error.message, 'error');
//     }
//   };

//   const handleRoomSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const method = currentRoom ? 'PUT' : 'POST';
//       const url = currentRoom ? `${API_BASE_URL}/rooms/${currentRoom._id}` : `${API_BASE_URL}/rooms`;
      
//       const response = await fetch(url, {
//         method,
//         headers: { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(roomForm),
//         credentials: 'include'
//       });
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Operation failed');
//       }
      
//       const data = await response.json();
//       if (data.success) {
//         fetchRooms();
//         setOpenDialog(false);
//         showSnackbar(`Room ${currentRoom ? 'updated' : 'added'} successfully`, 'success');
//       }
//     } catch (error) {
//       showSnackbar(error.message, 'error');
//     }
//   };

//   const handleDeleteRoom = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/rooms/${currentRoom._id}`, {
//         method: 'DELETE',
//         credentials: 'include'
//       });
      
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Delete failed');
//       }
      
//       const data = await response.json();
//       if (data.success) {
//         fetchRooms();
//         setOpenDeleteDialog(false);
//         showSnackbar('Room deleted successfully', 'success');
//       }
//     } catch (error) {
//       showSnackbar(error.message, 'error');
//     }
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbar({ open: true, message, severity });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const handleAddRoom = () => {
//     setCurrentRoom(null);
//     setRoomForm({
//       roomNumber: '',
//       roomType: 'standard',
//       price: '',
//       capacity: 2,
//       quantity: 1,
//       description: '',
//       amenities: [],
//       images: []
//     });
//     setOpenDialog(true);
//   };

//   const handleEditRoom = (room) => {
//     setCurrentRoom(room);
//     setRoomForm({
//       roomNumber: room.roomNumber,
//       roomType: room.roomType,
//       price: room.price,
//       capacity: room.capacity,
//       quantity: room.quantity,
//       description: room.description,
//       amenities: room.amenities,
//       images: room.images
//     });
//     setOpenDialog(true);
//   };

//   const handleDeleteClick = (room) => {
//     setCurrentRoom(room);
//     setOpenDeleteDialog(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/admin');
//   };

//   const renderAmenityIcon = (amenity) => {
//     switch (amenity) {
//       case 'wifi': return <Wifi fontSize="small" />;
//       case 'ac': return <AcUnit fontSize="small" />;
//       case 'tv': return <Tv fontSize="small" />;
//       case 'minibar': return <LocalBar fontSize="small" />;
//       case 'bathtub': return <Bathtub fontSize="small" />;
//       case 'roomservice': return <RoomService fontSize="small" />;
//       default: return null;
//     }
//   };

//   if (!isLoggedIn) {
//     return (
//       <Container maxWidth="xs" sx={{ mt: 8 }}>
//         <StyledPaper elevation={3}>
//           <Box sx={{ textAlign: 'center', mb: 4 }}>
//             <Hotel color="primary" sx={{ fontSize: 60 }} />
//             <Typography variant="h4" component="h1" gutterBottom>
//               Admin Login
//             </Typography>
//           </Box>
          
//           <form onSubmit={handleLogin}>
//             <TextField
//               fullWidth
//               label="Username"
//               variant="outlined"
//               margin="normal"
//               value={loginForm.username}
//               onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
//               required
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               margin="normal"
//               value={loginForm.password}
//               onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
//               required
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               size="large"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Login
//             </Button>
//           </form>
//         </StyledPaper>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//         <Typography variant="h4" component="h1">
//           Hotel Admin Panel
//         </Typography>
//         <Button variant="outlined" color="error" onClick={handleLogout}>
//           Logout
//         </Button>
//       </Box>

//       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
//         <Button
//           variant={activeTab === 'rooms' ? 'contained' : 'text'}
//           onClick={() => setActiveTab('rooms')}
//           startIcon={<Hotel />}
//           sx={{ mr: 2 }}
//         >
//           Rooms
//         </Button>
//         <Button
//           variant={activeTab === 'bookings' ? 'contained' : 'text'}
//           onClick={() => setActiveTab('bookings')}
//           startIcon={<CalendarToday />}
//           sx={{ mr: 2 }}
//         >
//           Bookings
//         </Button>
//       </Box>

//       {activeTab === 'rooms' && (
//         <>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
//             <Button variant="contained" startIcon={<Add />} onClick={handleAddRoom}>
//               Add Room
//             </Button>
//           </Box>

//           <Grid container spacing={3}>
//             {rooms.map((room) => (
//               <Grid item xs={12} sm={6} md={4} key={room._id}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={room.images[0] || '/placeholder-room.jpg'}
//                     alt={room.roomNumber}
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                       <Typography variant="h6" component="h3">
//                         {room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)} Room
//                       </Typography>
//                       <Chip label={`Room ${room.roomNumber}`} color="primary" size="small" />
//                     </Box>
//                     <Typography variant="subtitle1" color="text.secondary" gutterBottom>
//                       ₹{room.price.toLocaleString('en-IN')} per night
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       {room.description}
//                     </Typography>
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                       <People fontSize="small" sx={{ mr: 1 }} />
//                       <Typography variant="body2">
//                         Capacity: {room.capacity} adults
//                       </Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                       <Hotel fontSize="small" sx={{ mr: 1 }} />
//                       <Typography variant="body2">
//                         Quantity: {room.quantity} available
//                       </Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
//                       {room.amenities.map((amenity, index) => (
//                         <Tooltip key={index} title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}>
//                           <Chip
//                             icon={renderAmenityIcon(amenity)}
//                             size="small"
//                             sx={{ textTransform: 'capitalize' }}
//                           />
//                         </Tooltip>
//                       ))}
//                     </Box>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                       <Button
//                         variant="outlined"
//                         startIcon={<Edit />}
//                         onClick={() => handleEditRoom(room)}
//                         size="small"
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="error"
//                         startIcon={<Delete />}
//                         onClick={() => handleDeleteClick(room)}
//                         size="small"
//                       >
//                         Delete
//                       </Button>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </>
//       )}

//       {activeTab === 'bookings' && (
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Booking ID</TableCell>
//                 <TableCell>Guest</TableCell>
//                 <TableCell>Room</TableCell>
//                 <TableCell>Dates</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Total</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {bookings.map((booking) => (
//                 <TableRow key={booking._id}>
//                   <TableCell>{booking._id.substring(0, 8)}</TableCell>
//                   <TableCell>
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
//                         {booking.guestName.charAt(0)}
//                       </Avatar>
//                       {booking.guestName}
//                     </Box>
//                     <Typography variant="body2" color="text.secondary">
//                       <Phone fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
//                       {booking.guestPhone}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     Room {booking.roomNumber}
//                     <Typography variant="body2" color="text.secondary">
//                       {booking.roomType}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
//                     <Typography variant="body2" color="text.secondary">
//                       {booking.nights} nights
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Chip
//                       label={booking.status}
//                       color={
//                         booking.status === 'confirmed' ? 'success' :
//                         booking.status === 'pending' ? 'warning' : 'error'
//                       }
//                       size="small"
//                     />
//                   </TableCell>
//                   <TableCell>
//                     ₹{booking.totalAmount.toLocaleString('en-IN')}
//                   </TableCell>
//                   <TableCell>
//                     <IconButton>
//                       <Visibility color="primary" />
//                     </IconButton>
//                     <IconButton>
//                       {booking.status === 'confirmed' ? (
//                         <Lock color="success" />
//                       ) : (
//                         <LockOpen color="action" />
//                       )}
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}

//       {/* Add/Edit Room Dialog */}
//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
//         <DialogTitle>
//           {currentRoom ? 'Edit Room' : 'Add New Room'}
//         </DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleRoomSubmit}>
//             <Grid container spacing={3} sx={{ mt: 1 }}>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Room Number"
//                   value={roomForm.roomNumber}
//                   onChange={(e) => setRoomForm({...roomForm, roomNumber: e.target.value})}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <FormControl fullWidth>
//                   <InputLabel>Room Type</InputLabel>
//                   <Select
//                     value={roomForm.roomType}
//                     label="Room Type"
//                     onChange={(e) => setRoomForm({...roomForm, roomType: e.target.value})}
//                     required
//                   >
//                     <MenuItem value="standard">Standard</MenuItem>
//                     <MenuItem value="deluxe">Deluxe</MenuItem>
//                     <MenuItem value="suite">Suite</MenuItem>
//                     <MenuItem value="executive">Executive</MenuItem>
//                     <MenuItem value="presidential">Presidential</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Price per night (₹)"
//                   type="number"
//                   value={roomForm.price}
//                   onChange={(e) => setRoomForm({...roomForm, price: e.target.value})}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <FormControl fullWidth>
//                   <InputLabel>Capacity</InputLabel>
//                   <Select
//                     value={roomForm.capacity}
//                     label="Capacity"
//                     onChange={(e) => setRoomForm({...roomForm, capacity: e.target.value})}
//                     required
//                   >
//                     <MenuItem value={1}>1 Adult</MenuItem>
//                     <MenuItem value={2}>2 Adults</MenuItem>
//                     <MenuItem value={3}>3 Adults</MenuItem>
//                     <MenuItem value={4}>4 Adults</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Number of Rooms Available"
//                   type="number"
//                   value={roomForm.quantity}
//                   onChange={(e) => setRoomForm({...roomForm, quantity: e.target.value})}
//                   inputProps={{ min: 1 }}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Description"
//                   multiline
//                   rows={4}
//                   value={roomForm.description}
//                   onChange={(e) => setRoomForm({...roomForm, description: e.target.value})}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel>Amenities</InputLabel>
//                   <Select
//                     multiple
//                     value={roomForm.amenities}
//                     onChange={(e) => setRoomForm({...roomForm, amenities: e.target.value})}
//                     renderValue={(selected) => (
//                       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                         {selected.map((value) => (
//                           <Chip key={value} label={value} size="small" />
//                         ))}
//                       </Box>
//                     )}
//                   >
//                     {['wifi', 'ac', 'tv', 'minibar', 'bathtub', 'roomservice'].map((amenity) => (
//                       <MenuItem key={amenity} value={amenity}>
//                         {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button 
//                   variant="contained" 
//                   component="label" 
//                   startIcon={<Image />}
//                   sx={{ mb: 2 }}
//                 >
//                   Upload Images
//                   <input 
//                     type="file" 
//                     hidden 
//                     multiple 
//                     onChange={handleImageUpload}
//                     accept="image/*"
//                   />
//                 </Button>
//                 {roomForm.images.length > 0 && (
//                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
//                     {roomForm.images.map((image, index) => (
//                       <Box key={index} sx={{ position: 'relative' }}>
//                         <img 
//                           src={image.startsWith('http') ? image : `${API_BASE_URL}/uploads/${image}`}
//                           alt={`Room image ${index + 1}`}
//                           style={{ 
//                             width: 100, 
//                             height: 100, 
//                             objectFit: 'cover',
//                             borderRadius: theme.shape.borderRadius
//                           }}
//                           onError={(e) => {
//                             e.target.src = "https://via.placeholder.com/100?text=Image+Error";
//                           }}
//                         />
//                         <IconButton
//                           size="small"
//                           sx={{
//                             position: 'absolute',
//                             top: 0,
//                             right: 0,
//                             backgroundColor: theme.palette.error.main,
//                             color: theme.palette.error.contrastText,
//                             '&:hover': {
//                               backgroundColor: theme.palette.error.dark
//                             }
//                           }}
//                           onClick={() => {
//                             setRoomForm({
//                               ...roomForm,
//                               images: roomForm.images.filter((_, i) => i !== index)
//                             });
//                           }}
//                         >
//                           <Delete fontSize="small" />
//                         </IconButton>
//                       </Box>
//                     ))}
//                   </Box>
//                 )}
//               </Grid>
//             </Grid>
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
//           <Button onClick={handleRoomSubmit} variant="contained" color="primary">
//             {currentRoom ? 'Update' : 'Add'} Room
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Are you sure you want to delete Room {currentRoom?.roomNumber} ({currentRoom?.roomType})?
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
//           <Button onClick={handleDeleteRoom} variant="contained" color="error">
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
  Box
} from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [openCheckoutDialog, setOpenCheckoutDialog] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);

  const fetchBookings = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      const response = await axios.get('http://localhost:5001/api/admin/bookings');
      if (response.data && Array.isArray(response.data.bookings)) {
        setBookings(response.data.bookings);
      } else {
        setBookings([]);
        setApiError('Invalid data format received from server');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setApiError(error.response?.data?.message || 'Failed to fetch bookings');
      setBookings([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setError('');
    try {
      const response = await axios.post('http://localhost:5001/api/admin/login', {
        username,
        password
      });
      
      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.put(`http://localhost:5001/api/bookings/${selectedBooking._id}/checkout`);
      fetchBookings();
      setOpenCheckoutDialog(false);
    } catch (error) {
      console.error('Error during checkout:', error);
      setApiError(error.response?.data?.message || 'Checkout failed');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!isAuthenticated) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Admin Login
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
          >
            Login
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>
      
      {apiError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {apiError}
        </Alert>
      )}

      {isLoading ? (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
           <TableHead>
  <TableRow>
    <TableCell>Booking ID</TableCell>
    <TableCell>Customer</TableCell>
    <TableCell>Rooms</TableCell>
    <TableCell>Check-in</TableCell>
    <TableCell>Check-out</TableCell>
    <TableCell>Arrival Time</TableCell>
    <TableCell>Amount</TableCell>
    <TableCell>Payment</TableCell>
    <TableCell>Method</TableCell>
    <TableCell>Actions</TableCell>
  </TableRow>
</TableHead>
           <TableBody>
  {bookings.map((booking) => (
    <TableRow key={booking._id}>
      <TableCell>{booking._id.substring(18)}</TableCell>
      <TableCell>
        {booking.customerName}<br/>
        {booking.customerPhone}
      </TableCell>
      <TableCell>
        {booking.selectedRooms.map(room => (
          <div key={room.roomNumber}>
            {room.roomNumber} (₹{room.price})
          </div>
        ))}
      </TableCell>
      <TableCell>{formatDate(booking.checkInDate)}</TableCell>
      <TableCell>{formatDate(booking.checkOutDate)}</TableCell>
      <TableCell>
        {booking.arrivalTime ? new Date(booking.arrivalTime).toLocaleTimeString() : 'N/A'}
      </TableCell>
      <TableCell>₹{booking.totalAmount}</TableCell>
      <TableCell>
        <span style={{ 
          color: booking.paymentStatus === 'Completed' ? 'green' : 'orange',
          fontWeight: 'bold'
        }}>
          {booking.paymentStatus}
        </span>
      </TableCell>
      <TableCell>
        {booking.paymentMethod}
      </TableCell>
      <TableCell>
        <Button 
          variant="outlined" 
          color="secondary"
          onClick={() => {
            setSelectedBooking(booking);
            setOpenCheckoutDialog(true);
          }}
          disabled={booking.paymentStatus !== 'Completed'}
        >
          Checkout
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog
        open={openCheckoutDialog}
        onClose={() => setOpenCheckoutDialog(false)}
      >
        <DialogTitle>Confirm Checkout</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to check out {selectedBooking?.customerName} from {selectedBooking?.roomNumber}?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            This will make the room available for new bookings.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCheckoutDialog(false)}>Cancel</Button>
          <Button onClick={handleCheckout} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;