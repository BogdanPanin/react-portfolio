import React from "react";
import "../scss/about.scss";
import "../scss/mediaAbout.scss";
import ya from "../assets/img/i.png";
import github from "../assets/img/github.png";
import instagram from "../assets/img/instagram.png";

function About() {
  const img = React.useRef("");
  const triangle = React.useRef("");
  const instagramImg = React.useRef("");
  const githubImg = React.useRef("");
  const scrollHandler = (e) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let scroll = e.path[1].scrollY;
      if (scroll <= 500) {
        img.current.style.opacity = "0";
        triangle.current.style.transform = "scale(0)";
        instagramImg.current.style.transform = "scale(0)";
        githubImg.current.style.transform = "scale(0)";
      } else if (scroll >= 600) {
        img.current.style.opacity = "1";
        triangle.current.style.transform = "scale(0.7)";
        instagramImg.current.style.transform = "scale(0.7) rotate(45deg)";
        githubImg.current.style.transform = "scale(0.7) rotate(-45deg)";
      }
    } else {
      let scroll = e.path[1].scrollY;
      if (scroll <= 3400) {
        img.current.style.opacity = "0";
        triangle.current.style.transform = "scale(0)";
        instagramImg.current.style.transform = "scale(0)";
        githubImg.current.style.transform = "scale(0)";
      } else if (scroll >= 3550) {
        img.current.style.opacity = "1";
        triangle.current.style.transform = "scale(0.7)";
        instagramImg.current.style.transform = "scale(0.7) rotate(45deg)";
        githubImg.current.style.transform = "scale(0.7) rotate(-45deg)";
      }
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <section className="about">
      <div className="about__text">
        <a name="about"></a>
        <p className="about__header">&lt;about&gt;</p>
        <p className="about__p">
          Я Front-end developer.
          <br /> <br />
          <span style={{ color: "#FF951D" }}>
            Я создаваю высокопроизводительные и многофункциональные
            интерактивные веб-сайты, которые работают на всех платформах и
            устройствах.
          </span>
          <br /> <br />
          <span style={{ color: "#FF951D" }}>
            Мои веб-сайты в основном создаются с использованием ReactJS, HTML5,
            SCSS, SVG и JavaScript. <br /> <br />
          </span>
          Стремясь всегда быть в курсе что выходит нового в IT, саморазвиваюсь и
          достигаю целей
        </p>
        <p className="about__header">&lt;/about&gt;</p>
      </div>
      <div className="about__triangle">
        <svg
          ref={triangle}
          xmlns="http://www.w3.org/2000/svg"
          width="487"
          height="421"
          viewBox="0 0 487 421"
          fill="none"
          className="about__svg"
        >
          <path
            d="M469.1 10.25L243.5 401L17.9004 10.25L469.1 10.25Z"
            stroke="white"
            strokeWidth="20"
          />
        </svg>
        <img alt="images" src={ya} className="about__ya" ref={img}></img>
        <a href="https://github.com/BogdanPanin">
          <img
            alt="images"
            src={github}
            className="about__github"
            ref={githubImg}
          ></img>
        </a>
        <a href="https://www.instagram.com/ateist_01/">
          <img
            alt="images"
            src={instagram}
            className="about__instagram"
            ref={instagramImg}
          ></img>
        </a>
      </div>
    </section>
  );
}

export default About;