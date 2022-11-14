import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [randoms, setRandoms] = useState([]);

  // 검색 정보 불러오기 (클릭했을 때만 불러옴 _ JS 방식)
  const search = async (query) => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=gjVsZ-zpevOV0p4hAa4Bll-1Ef-aJdelgd0Wfq5-XUE&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  // 이미지 정보 불러오기
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=gjVsZ-zpevOV0p4hAa4Bll-1Ef-aJdelgd0Wfq5-XUE&query=color&count=30"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setImages(result))
      .catch((error) => console.log(error));

    // 슬라이더 (랜덤으로 불러오기)
    fetch(
      "https://api.unsplash.com/photos/random?client_id=gjVsZ-zpevOV0p4hAa4Bll-1Ef-aJdelgd0Wfq5-XUE&count=10"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setRandoms(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash list", "using API"]} />
        <UnsplashSlider randoms={randoms} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Unsplash;
