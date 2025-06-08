const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const getAvailableRooms = async (queryParams = '') => {
  const response = await fetch(`${API_URL}/rooms/available?${queryParams}`);
  return handleResponse(response);
};

export const createBooking = async (bookingData) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  return handleResponse(response);
};

export const getBookings = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/admin/bookings`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return handleResponse(response);
};

export const updateBooking = async (id, updateData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/admin/bookings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
    body: JSON.stringify(updateData),
  });
  return handleResponse(response);
};