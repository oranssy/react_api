import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

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
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* <ul> */}
            {props.popularity.map((popularity, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <PopularList key={index} popular={popularity} index={index} />
                </SwiperSlide>
              ) : null
            )}
            {/* </ul> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
