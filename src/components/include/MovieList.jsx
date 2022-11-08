import React from "react";

function PopularList(props) {
  return (
    <li>
      <div className="popularNum">{props.index + 1}</div>
      <a href={`https://www.themoviedb.org/movie/${props.popular.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.popular.poster_path}`}
          alt={props.popular.title}
        />
        <em>
          <span className="title">{props.popular.title}</span>
          <span className="star">★ {props.popular.vote_average}</span>
        </em>
      </a>
    </li>
  );
}

const MovieList = (props) => {
  // console.log(popularity)

  return (
    <section id="movie__list">
      <h2>Popular Movies</h2>
      <div className="container">
        <div className="list__inner">
          <ul>
            {props.popularity.map((popularity, index) =>
              index < 5 ? (
                <PopularList key={index} popular={popularity} index={index} />
              ) : null
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
