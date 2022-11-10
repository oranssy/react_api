import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import MovieList from "../include/MovieList";
import MovieSearch from "../include/MovieSearch";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";
// import { useEffect } from "react";

const Movie = () => {
  const [popularity, setPopularity] = useState([]);
  const [movies, setMovies] = useState([]);

  // 인기 순위 불러오기
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=1ea57f2063af5c274ebfea0573b7df9a&language=en-US&page=1`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setPopularity(result.results))
      .catch((error) => console.log(error));
  }, []);

  // 검색은 클릭했을 때만 불러옴 (js 방식)
  const search = async (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1ea57f2063af5c274ebfea0573b7df9a&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  // 영화 정보 불러오기
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=1ea57f2063af5c274ebfea0573b7df9a&query=marvel&page=1"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference API"]} />
        <MovieList popularity={popularity} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
