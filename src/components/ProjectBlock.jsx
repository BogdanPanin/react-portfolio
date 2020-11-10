import React from "react";
import "../scss/project.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectBlock({ title, description, url }) {
  const Loading = React.useRef(null);
  const DivRef = React.useRef(null);
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(Loading.current, {
      scrollTrigger: {
        start: "center bottom",
        trigger: Loading.current,
        toggleActions: "restart none none none",
      },
      width: 0,
      duration: 2,
    });
    gsap.to(Loading.current, {
      scrollTrigger: {
        start: "bottom top",
        trigger: Loading.current,
        toggleActions: "restart none none none",
      },
      width: 0,
      duration: 2,
    });
    gsap.to(Loading.current, {
      scrollTrigger: {
        trigger: Loading.current,
        start: "500px top",
        toggleActions: "restart none none none",
      },
      width: "100%",
      duration: 1,
    });
  }, []);
  return (
    <div className="project__block">
      <div className="project__loading" ref={Loading}></div>
      <div className="project__div" ref={DivRef}>
        <p className="project__title">{title}</p>
        <p className="project__description">{description}</p>
        <a className="project__a" href={url}>
          Посетить веб сайт
        </a>
      </div>
    </div>
  );
}

export default ProjectBlock;
