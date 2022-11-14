import React from "react";

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("milky way");
  };

  const onClick2 = () => {
    onSearch("flower");
  };

  const onClick3 = () => {
    onSearch("scenery");
  };

  const onClick4 = () => {
    onSearch("adventure");
  };

  const onClick5 = () => {
    onSearch("journey");
  };

  const onClick6 = () => {
    onSearch("face");
  };

  const onClick7 = () => {
    onSearch("pet");
  };

  const onClick8 = () => {
    onSearch("interior");
  };

  const onClick9 = () => {
    onSearch("geometry");
  };

  const onClick10 = () => {
    onSearch("color");
  };

  return (
    <div className="unsplash__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          milky way
        </button>
        <button type="submit" onClick={onClick2}>
          flower
        </button>
        <button type="submit" onClick={onClick3}>
          scenery
        </button>
        <button type="submit" onClick={onClick4}>
          adventure
        </button>
        <button type="submit" onClick={onClick5}>
          journey
        </button>
        <button type="submit" onClick={onClick6}>
          face
        </button>
        <button type="submit" onClick={onClick7}>
          pet
        </button>
        <button type="submit" onClick={onClick8}>
          interior
        </button>
        <button type="submit" onClick={onClick9}>
          geometry
        </button>
        <button type="submit" onClick={onClick10}>
          color
        </button>
      </div>
    </div>
  );
};

export default UnsplashBtn;
