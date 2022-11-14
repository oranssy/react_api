import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination } from "swiper";

function NationalGeoList(props) {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${props.nationalGeo.id.videoId}`}
      >
        <img
          src={props.nationalGeo.snippet.thumbnails.high.url}
          alt={props.nationalGeo.snippet.title}
        />
        <em>
          <span className="title">{props.nationalGeo.snippet.title}</span>
        </em>
      </a>
    </li>
  );
}

const YoutubeList = (props) => {
  // console.log(nationalGeo);

  return (
    <section id="youtube__list">
      <h2>National Geographic Video</h2>
      <div className="container">
        <div className="youtubeList__inner">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
          >
            {/* <ul> */}
            {props.nationalGeo.map((nationalGeo, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <NationalGeoList
                    key={index}
                    nationalGeo={nationalGeo}
                    index={index}
                  />
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

export default YoutubeList;
