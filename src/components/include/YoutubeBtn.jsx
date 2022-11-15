import React from "react";

const YoutubeBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("Webstoryboy");
  };

  const onClick2 = () => {
    onSearch("billboard hot 100");
  };

  const onClick3 = () => {
    onSearch("TurningPoint Music");
  };

  const onClick4 = () => {
    onSearch("Ed Sheeran");
  };

  const onClick5 = () => {
    onSearch("Charlie Puth");
  };

  const onClick6 = () => {
    onSearch("Adele");
  };

  const onClick7 = () => {
    onSearch("Winona Oak");
  };

  const onClick8 = () => {
    onSearch("Hailee Steinfeld");
  };

  const onClick9 = () => {
    onSearch("Dua Lipa");
  };

  const onClick10 = () => {
    onSearch("OneRepublic");
  };

  return (
    <div className="youtube__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          Webstoryboy
        </button>
        <button type="submit" onClick={onClick2}>
          billboard hot 100
        </button>
        <button type="submit" onClick={onClick3}>
          TurningPoint Music
        </button>
        <button type="submit" onClick={onClick4}>
          Ed Sheeran
        </button>
        <button type="submit" onClick={onClick5}>
          Charlie Puth
        </button>
        <button type="submit" onClick={onClick6}>
          Adele
        </button>
        <button type="submit" onClick={onClick7}>
          Winona Oak
        </button>
        <button type="submit" onClick={onClick8}>
          Hailee Steinfeld
        </button>
        <button type="submit" onClick={onClick9}>
          Dua Lipa
        </button>
        <button type="submit" onClick={onClick10}>
          OneRepublic
        </button>
      </div>
    </div>
  );
};

export default YoutubeBtn;
