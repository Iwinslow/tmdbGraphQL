import React from "react";

function Card({ movie }) {
  const { title, overview, vote_average } = movie.movie;
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{overview}</li>
        <li>{vote_average}</li>
      </ul>
    </div>
  );
}

export default Card;
