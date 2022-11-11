import React from "react";
import { useState, useEffect } from "react"; // 리액트훅 선언해줌

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";

// 클래스 컴퍼넌트 / 함수형 컴퍼넌트 ---> 장점을 모두 모아허 리액트 훅을 만들었음.
// 클래스와 함수형의 차이점 : 지역변수 전역변수 설정 방법의 차이. 클로져, 내부/외부 함수

const Reference = () => {
  //       변수 ,   함수(set + 이름)
  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/oranssy/react_api/main/src/utils/reference.json"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setReferences(result.cssRefer))
      .catch((error) => console.log("error", error));

    // fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
    //   .then((response) => response.json())
    //   // .then((result) => console.log(result.data.htmlRefer))
    //   // .then((result) => setReferences(result.data))   // 객체
    //   .then((result) => setReferences(result.data.htmlRefer)) // 배열
    //   .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["CSS Reference", "Using API"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
