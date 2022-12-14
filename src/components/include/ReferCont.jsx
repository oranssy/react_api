// import { info } from "node-sass";
import React from "react";

const ReferText = ({ num, category, title, desc, use }) => {
  return (
    <li>
      <span>
        <em>{num}</em>
        <em>{title}</em>
        <em>{desc}</em>
        <em>{category}</em>
        <em>{use}</em>
      </span>
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

// const referInfo = [
//   {
//     "type": "css",
//     "cssRefer": [
//       {
//         "num": 1,
//         "title": "all",
//         "desc": "all 속성은 요소의  unicode-bidi, direction, CSS 사용자 지정 속성을 제외한 모든 속성을 초기화합니다.",
//         "desc2": "all 속성은 초깃값, 상속값, 아니면 다른 스타일시트 출처의 값으로 설정할 수 있습니다.",
//         "construction": "all: 'value'",
//         "value": "initial / inherit / unset / revert",
//         "initialValue": "There is no practical initial value for it.",
//         "apply": "all elements",
//         "inherit": "no",
//         "use": "★★★★☆"
//       },
//       {
//         "num": 2,
//         "title": "box-shadow",
//         "desc": "box-shadow 속성은 요소의 테두리를 감싼 그림자 효과를 추가합니다.",
//         "desc2": "box-shadow 속성은 박스 그림자는 요소에서의 수평수직 거리(오프셋), 흐릿함과 확산 정도, 색상으로 이루어집니다.",
//         "construction": "box-shadow: +'value'",
//         "value": "inset / offset-x  offset-y / blur-radius / spread-radius / color",
//         "initialValue": "none",
//         "apply": "all elements",
//         "inherit": "no",
//         "use": "★★★★☆"
//       },
//       {
//         "num": 3,
//         "title": "contain",
//         "desc": "contain 속성은 특정 요소와 콘텐츠가 문서 트리의 다른 부위와 독립되어있음을 나타낼 때 사용합니다.",
//         "desc2": "contain 속성은 브라우저는 contain 속성 정보를 사용해 레이아웃, 스타일, 페인트, 크기, 또는 그 조합의 계산을 전체 페이지 DOM 대신 일부에서만 수행할 수 있으므로 뚜렷한 성능 상 이점을 얻을 수 있습니다.",
//         "construction": "contain: 'value'",
//         "value": "none / strict / content / size / layout / style / paint",
//         "initialValue": "none",
//         "apply": "all elements",
//         "inherit": "no",
//         "use": "★★★☆☆"
//       },
//       {
//         "num": 4,
//         "title": "display",
//         "desc": "display 속성은 요소를 블록과 인라인 요소 중 어느 쪽으로 처리할 지를 결정합니다.",
//         "desc2": "display 속성은 플로우, 그리드, 플렉스처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정합니다.",
//         "construction": "display: 'value'",
//         "value": "block / inline",
//         "initialValue": "inline",
//         "apply": "all elements",
//         "inherit": "no",
//         "use": "★★★★★"
//       },
//       {
//         "num": 5,
//         "title": "gap",
//         "desc": "gap 속성은 행과 열 사이의 간격(거터)을 설정합니다.",
//         "desc2": "gap 속성은 row-gap과 column-gap의 단축 속성입니다.",
//         "construction": "gap: 'value'",
//         "value": "length / percentage",
//         "initialValue": "normal",
//         "apply": "multi-column elements, flex containers, grid containers",
//         "inherit": "no",
//         "use": "★★☆☆☆"
//       },
//       {
//         "num": 6,
//         "title": "opacity",
//         "desc": "opacity 속성은 요소의 불투명도를 설정합니다.",
//         "desc2": "불투명도는 요소 뒤쪽 콘텐츠가 숨겨지는 정도로, 투명도의 반대입니다.",
//         "construction": "opacity: 'value'",
//         "value": "alpha-value (number / percentage)",
//         "initialValue": "1",
//         "apply": "all elements",
//         "inherit": "no",
//         "use": "★★★★☆"
//       },
//       {
//         "num": 7,
//         "title": "perspective",
//         "desc": "perspective 속성은 3D 위치 요소에 원근감을 설정합니다.",
//         "desc2": "perspective 속성은 z=0 평면과 사용자 사이의 거리를 결정합니다.",
//         "construction": "perspective: 'value'",
//         "value": "none / length",
//         "initialValue": "none",
//         "apply": "transformable elements",
//         "inherit": "no",
//         "use": "★★★☆☆"
//       },
//       {
//         "num": 8,
//         "title": "scale",
//         "desc": "scale 속성은 개별적인 스케일 변환을 지정할 수 있습니다..",
//         "desc2": "scale 속성을 사용할 때 변환 함수의 정확한 순서를 기억할 필요가 없습니다.",
//         "construction": "scale : 'value'",
//         "value": "Single or Two or Three value (number / percentage)",
//         "initialValue": "none",
//         "apply": "transformable elements",
//         "inherit": "no",
//         "use": "★★★☆☆"
//       },
//       {
//         "num": 9,
//         "title": "text-decoration",
//         "desc": "text-decoration 속성은 텍스트의 밑줄 스타일을 설정합니다.",
//         "desc2": "text-decoration 속성은 -line / -color / -style / -thickness 을 포함하는 약어입니다.",
//         "construction": "",
//         "value": "-line / -color / -style / -thickness",
//         "initialValue": "currentcolor / solid / none",
//         "apply": "all elements",
//         "inherit": "no",
//         "use": "★★★☆☆"
//       },
//       {
//         "num": 10,
//         "title": "word-break",
//         "desc": "word-break 속성은 텍스트가 내용 상자를 넘칠 경우, 줄 바꿈으로 표시할지 여부를 설정합니다.",
//         "desc2": "word-break 속성에 들어가는 값은 단일 키워드로 지정됩니다.",
//         "construction": "word-break: 'value'",
//         "value": "normal / break-all / keep-all / break-word",
//         "initialValue": "normal",
//         "apply": "all elements",
//         "inherit": "yes",
//         "use": "★★☆☆☆"
//       }
//     ]
//   }
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
          <h2>CSS Property</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                num={refer.num}
                title={refer.title}
                desc={refer.desc}
                category={refer.category}
                use={refer.use}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReferCont;
