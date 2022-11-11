import React from "react";

const mainInfo = [
  { text: "We provide" },
  { text: "a visual coding" },
  { text: "solutions" },
  { text: "that utilizes API." },
];

const MainText = ({ text }) => {
  return <div>{text}</div>;
};

const Maincont = () => {
  return (
    <section className="cont__main">
      <div className="container">
        <div className="main__inner">
          {mainInfo.map((text, idx) => (
            <MainText key={idx} text={text.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maincont;

// map 인자값으로 idx를 넣어줘야 오루나지 않음!!