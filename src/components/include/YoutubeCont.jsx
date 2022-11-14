import React from "react";

function YoutubeItem(props) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${props.youtubes.id.videoId}`}>
        <img
          src={props.youtubes.snippet.thumbnails.high.url}
          alt={props.youtubes.snippet.title}
        />
        <em>
          <span className="title">{props.youtubes.snippet.title}</span>
        </em>
      </a>
    </li>
  );
}

//const YoutubeCont = ({ youtubes }) => {

const YoutubeCont = (props) => {
  // console.log(youtubes);
  return (
    <section id="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {props.youtubes.map((youtubes, index) => (
              <YoutubeItem key={index} youtubes={youtubes} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YoutubeCont;
