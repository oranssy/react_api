import React from "react";

const YoutubeBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("Webstoryboy");
  };

  const onClick2 = () => {
    onSearch("OneRepublic");
  };

  const onClick3 = () => {
    onSearch("Charlie Puth");
  };

  const onClick4 = () => {
    onSearch("Ed Sheeran");
  };

  const onClick5 = () => {
    onSearch("Katy Perry");
  };

  const onClick6 = () => {
    onSearch("The Chainsmokers");
  };

  const onClick7 = () => {
    onSearch("Clean Bandit");
  };

  const onClick8 = () => {
    onSearch("Pentatonix");
  };

  return (
    <div className="youtube__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          Webstoryboy
        </button>
        <button type="submit" onClick={onClick2}>
          OneRepublic
        </button>
        <button type="submit" onClick={onClick3}>
          Charlie Puth
        </button>
        <button type="submit" onClick={onClick4}>
          Ed Sheeran
        </button>
        <button type="submit" onClick={onClick5}>
          Katy Perry
        </button>
        <button type="submit" onClick={onClick6}>
          The Chainsmokers
        </button>
        <button type="submit" onClick={onClick7}>
          Clean Bandit
        </button>
        <button type="submit" onClick={onClick8}>
          Pentatonix
        </button>
      </div>
    </div>
  );
};

export default YoutubeBtn;
