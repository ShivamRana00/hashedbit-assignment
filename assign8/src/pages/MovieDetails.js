import React from "react";
import '../styles.css';
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
   const movieImage = `/images/movie${id}.jpg`;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Details for Movie {id}</h2>
      <img src={movieImage} alt={`Movie ${id}`} className="detail-image" />

      <p>Some details about Movie {id}...</p>
      <button onClick={() => navigate("/book")}>Book Seat</button>
    </div>
  );
}

export default MovieDetails;
