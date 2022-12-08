import React from "react";

const AboutCont = () => {
  return (
    <section className="cont__about">
      <div className="container">
        <div className="about__contents about1">
          <img src="img/aboutMe01.jpg" alt="aboutMe01" />
          <div className="aboutBox">
            <p className="about__tit">꿈을 그립니다.</p>
            <p className="about__desc">
              저는 다양하게 생각하는 것을 좋아합니다. 어릴 때부터 새로운
              방법으로 만드는 것을 좋아했고, 나만의 그림과 공예를
              반가워했습니다. 제가 만든 노력으로 다른 이의 마음을 움직이는 것이
              참 기뻤습니다. 여기에는 갖가지 재료들이 많습니다. 언제 어디서든
              원하는 재료를 얻을 수 있고 여러 가지 생각을 그릴 수 있습니다.
              나만의 생각을 자유롭게 펼쳐갈 수 있다는 건 코딩의 큰 매력인 것
              같습니다. 앞으로도 나만의 꿈을 그리며 미래를 채우고 싶습니다.
            </p>
          </div>
        </div>
        <div className="about__contents about2">
          <img src="img/aboutMe02.jpg" alt="aboutMe02" />
          <div className="aboutBox">
            <p className="about__tit">끈기 있는 사람에게 기회가 온다.</p>
            <p className="about__desc">
              느리고 부족하고 만족스럽지 못해도 포기하지 않습니다. 성실하게
              노력하다보면 좁은 길일지라도 반드시 열린다고 생각합니다. 지치고
              힘들 때면 웃으며 힘을 냅니다. 끝까지 열심히 하다보면 언젠가
              돌아보며 크게 미소지을 날이 오겠지요?
            </p>
          </div>
        </div>
        <div className="about__contents about3">
          <div className="aboutBox">
            <p className="about__tit">스스로를 솔직하게 돌아봅니다.</p>
            <p className="about__desc">
              자신을 있는 그대로 바라볼 줄 아는 사람이 세상을 정직하게 살아갈 수
              있다고 생각합니다. 편견을 갖지 않고 마음에서 우러나오는 행동으로
              하루를 채워갑니다.
            </p>
          </div>
          <img src="img/aboutMe03.jpg" alt="aboutMe03" />
        </div>
      </div>
    </section>
  );
};

export default AboutCont;
