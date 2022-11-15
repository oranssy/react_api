import React from "react";

const MovieBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("disney");
  };

  const onClick2 = () => {
    onSearch("pixar");
  };

  const onClick3 = () => {
    onSearch("marvel");
  };

  const onClick4 = () => {
    onSearch("national geographic");
  };

  const onClick5 = () => {
    onSearch("discovery");
  };

  return (
    <div className="movie__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          Disney
        </button>
        <button type="submit" onClick={onClick2}>
          Pixar
        </button>
        <button type="submit" onClick={onClick3}>
          Marvel
        </button>
        <button type="submit" onClick={onClick4}>
          National geographic
        </button>
        <button type="submit" onClick={onClick5}>
          Discovery
        </button>
      </div>
    </div>
  );
};

export default MovieBtn;
