// import { info } from "node-sass";
import React from "react";

const ReferText = ({ id, title, desc }) => {
  return (
    <li>
      <span>{id}</span>
      <span>{title}</span>
      <span>{desc}</span>
    </li>
  );
};

// const referInfo = [
//     { num : 2, name : "animation", desc : "애니메이션과 관련된 속성을 설정합니다.", star : "★★★★☆" },
//     { num : 1, name : "background", desc : "배경에 대한 속성을 설정합니다.", star : "★★★★★" },
//     { num : 3, name : "border", desc : "테두리 속성을 설정합니다.", star : "★★★★★" },
//     { num : 4, name : "clip", desc : "요소에서 보여주고 싶은 영역을 지정합니다.", star : "★☆☆☆☆" },
//     { num : 5, name : "display", desc : "요소 또는 레이아웃에 대해 블록 또는 인라인 성질로의 처리 여부를 설정합니다.", star : "★★★★★" },
//     { num : 6, name : "empty-cells", desc : "테이블의 빈요소의 속성을 설정합니다.", star : "★☆☆☆☆" },
//     { num : 7, name : "forced-color-adjust", desc : "작성자가 강제색모드에서 특정 요소를 선택할 수 있게 합니다.", star : "☆☆☆☆☆" },
//     { num : 8, name : "gap", desc : "행과 열 사이의 간격을 설정합니다.", star : "★★★☆☆" },
//     { num : 9, name : "line-height", desc : "문장과 문장 사이의 간격을 설정합니다.", star : "★★★★☆" },
//     { num : 10, name : "min-width", desc : "요소의 최소 너비를 설정합니다.", star : "★★☆☆☆" },
// ];

// const ReferText = ({num, name, desc, star}) => {
//     return  <li>
//                 <a href="/">
//                     <span className='num'>{ num }</span>
//                     <span className='name'>{ name }</span>
//                     <span className='desc'>{ desc }</span>
//                     <span className='star'>{ star }</span>
//                 </a>
//             </li>
// }

const ReferCont = ({ references }) => {
  // console.log(references);

  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                id={refer.id}
                title={refer.title}
                desc={refer.desc}
                desc2={refer.desc2}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
