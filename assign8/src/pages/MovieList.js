import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';

const movies = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
   image: `/images/movie${i + 1}.jpg`
}));

function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="grid">
      {movies.map((movie) => (
        <div
          className="card"
          key={movie.id}
          onClick={() => navigate(`/details/${movie.id}`)}
        >
          <img src={movie.image} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
