import React from "react";
import "../scss/home.scss";
import "../scss/mediaHome.scss";
import HomeOctagon from "./HomeOctagon";

function Home() {
  return (
    <section className="home">
      <a name="home"></a>
      <p>
        Привет ! я Богдан. <br />Я создаю интерактивные веб-сайты, которые
        работаю на всех платформах и устройствах.
      </p>
      <HomeOctagon />
    </section>
  );
}

export default Home;
