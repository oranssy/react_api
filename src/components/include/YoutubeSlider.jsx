import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination } from "swiper";

function YvideoList(props) {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${props.youtubeVideo.id.videoId}`}
      >
        <img
          src={props.youtubeVideo.snippet.thumbnails.high.url}
          alt={props.youtubeVideo.snippet.title}
        />
        <em>
          <span className="title">{props.youtubeVideo.snippet.title}</span>
        </em>
      </a>
    </li>
  );
}

const YoutubeList = (props) => {
  // console.log(youtubeVideo);

  return (
    <section id="youtube__list">
      <h2>Exciting</h2>
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
            {props.youtubeVideo.map((youtubeVideo, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <YvideoList
                    key={index}
                    youtubeVideo={youtubeVideo}
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
