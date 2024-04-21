import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  return (
    <div className="right">
      <h2>Bookings List</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th className="booking-header">Vehicle</th>
            <th className="booking-header">Date</th>
            <th className="booking-header">From</th>
            <th className="booking-header">To</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.vehicle}</td>
              <td>{booking.date}</td>
              <td>{booking.from}</td>
              <td>{booking.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
