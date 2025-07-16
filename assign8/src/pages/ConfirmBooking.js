import React from "react";
import '../styles.css';
function ConfirmBooking() {
  const data = JSON.parse(localStorage.getItem("booking"));
  const bookingId = "BK" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Seat Booked!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
      <p><strong>Mobile:</strong> {data?.mobile}</p>
    </div>
  );
}

export default ConfirmBooking;
