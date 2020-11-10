import React from "react";
import { gsap } from "gsap";
import "../scss/home.scss";
import "../scss/mediaHome.scss";
import HomeOctagon from "./HomeOctagon";

function Home() {
  const TextRef = React.useRef(null);
  React.useEffect(() => {
    gsap.to(TextRef.current, {
      opacity: 1,
      x: -200,
      duration: 3,
      color: "#ffffff",
    });
  }, []);
  return (
    <section className="home">
      <a name="home"></a>
      <p ref={TextRef}>
        Привет ! я Богдан. <br />Я создаю интерактивные веб-сайты, которые
        работаю на всех платформах и устройствах.
      </p>
      <HomeOctagon />
    </section>
  );
}

export default Home;
