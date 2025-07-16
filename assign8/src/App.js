import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookForm from "./pages/BookForm";
import ConfirmBooking from "./pages/ConfirmBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/book" element={<BookForm />} />
        <Route path="/confirm" element={<ConfirmBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
