import React, { useRef } from "react";

const YoutubeSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    console.log(onSearch(value));
  };

  const onKeyPress = (event) => {
    // console.log("텍스트 입력후 엔터");
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    // console.log("검색 버튼 클릭");
    handleSearch();
  };

  return (
    <section id="youtube__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색할 텍스트를 입력해주세요."
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </section>
  );
};

export default YoutubeSearch;

// ref={inputRef}
