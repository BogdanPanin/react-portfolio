import React from "react";
import "../scss/project.scss";

function ProjectBlock({ title, description, url }) {
  const loading = React.useRef("");
  const scrollHandler = (e) => {
    let scroll = e.path[1].scrollY;
    if (scroll - 750 >= loading.current.getBoundingClientRect().top) {
      loading.current.style.width = "0px";
    } else if (scroll <= loading.current.getBoundingClientRect().top) {
      loading.current.style.width = "100%";
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="project__block">
      <div className="project__loading" ref={loading}></div>
      <p className="project__title">{title}</p>
      <p className="project__description">{description}</p>
      <a className="project__a" href={url}>
        Посетить веб сайт
      </a>
    </div>
  );
}

export default ProjectBlock;
