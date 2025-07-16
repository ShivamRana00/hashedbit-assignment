import React from "react";
import '../styles.css';
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Details for Movie {id}</h2>
      <img src="https://via.placeholder.com/300" alt="movie" />
      <p>Some details about Movie {id}...</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;
