import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper";

function ImgList(props) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${props.randoms.id}`}>
        <img
          src={props.randoms.urls.regular}
          alt={props.randoms.urls.description}
        />
      </a>
    </li>
  );
}

const UnsplashSlider = (props) => {
  // console.log(nationalGeo)

  return (
    <section id="unsplash__list">
      <h2>Random Img</h2>
      <div className="container">
        <div className="unsplashList__inner">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
            {/* <ul> */}
            {props.randoms.map((randoms, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <ImgList key={index} randoms={randoms} index={index} />
                </SwiperSlide>
              ) : null
            )}
            {/* </ul> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
