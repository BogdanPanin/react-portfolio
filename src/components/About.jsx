import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../scss/about.scss";
import "../scss/mediaAbout.scss";
import ya from "../assets/img/i.png";
import github from "../assets/img/github.png";
import instagram from "../assets/img/instagram.png";

function About() {
  const Ya = React.useRef(null);
  const Triangle = React.useRef(null);
  const Instagram = React.useRef(null);
  const Github = React.useRef(null);
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(Ya.current, {
      scrollTrigger: {
        start: "center bottom",
        trigger: Ya.current,
        toggleActions: "restart none none none",
      },
      opacity: 1,
      duration: 2,
    });
    gsap.to(Triangle.current, {
      scrollTrigger: {
        trigger: Triangle.current,
        start: "center bottom",
        toggleActions: "restart none none none",
      },
      scale: 0.7,
      duration: 2,
    });
    gsap.to(Instagram.current, {
      scrollTrigger: {
        trigger: Instagram.current,
        start: "center bottom",
        toggleActions: "restart none none none",
      },
      scale: 0.7,
      rotate: 400,
      duration: 2,
    });
    gsap.to(Github.current, {
      scrollTrigger: {
        trigger: Github.current,
        start: "center bottom",
        toggleActions: "restart none none none",
      },
      scale: 0.7,
      rotate: 315,
      duration: 2,
    });
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
          xmlns="http://www.w3.org/2000/svg"
          width="487"
          height="421"
          viewBox="0 0 487 421"
          fill="none"
          className="about__svg"
          ref={Triangle}
        >
          <path
            d="M469.1 10.25L243.5 401L17.9004 10.25L469.1 10.25Z"
            stroke="white"
            strokeWidth="20"
          />
        </svg>
        <img alt="images" src={ya} className="about__ya" ref={Ya}></img>
        <a href="https://github.com/BogdanPanin">
          <img
            alt="images"
            src={github}
            className="about__github"
            ref={Github}
          ></img>
        </a>
        <a href="https://www.instagram.com/ateist_01/">
          <img
            alt="images"
            src={instagram}
            className="about__instagram"
            ref={Instagram}
          ></img>
        </a>
      </div>
    </section>
  );
}

export default About;
