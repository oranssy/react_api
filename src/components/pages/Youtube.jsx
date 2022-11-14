import React from "react";
import { useState, useEffect } from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [nationalGeo, setnationalGeo] = useState([]);
  const [youtubes, setYoutubes] = useState([]);

  // National Geographic 불러오기
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=national+geographic&key=AIzaSyDxdr8fukvH3_B8OARtEtTtV79gAomnIBA&maxResults=10&type=video`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setnationalGeo(result.items))
      .catch((error) => console.log(error));
  }, []);

  // 검색 정보 불러오기 (클릭했을 때만 불러옴_ JS 방식)
  const search = async (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDxdr8fukvH3_B8OARtEtTtV79gAomnIBA&maxResults=32&type=video`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  // 유튜브 정보 불러오기
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=discovery&key=AIzaSyDxdr8fukvH3_B8OARtEtTtV79gAomnIBA&maxResults=20&type=video"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["List of YouTube", "using API"]} />
        <YoutubeSlider nationalGeo={nationalGeo} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
