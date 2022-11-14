import React from "react";

const UnsplashItem = ({ images }) => {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${images.id}`}>
        <img src={images.urls.regular} alt={images.urls.alt_description} />
      </a>
    </li>
  );
};

const UnsplashCont = ({ images }) => {
  return (
    <section id="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {images.map((images, index) => (
              <UnsplashItem key={index} images={images} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default UnsplashCont;
