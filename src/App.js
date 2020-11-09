import React from "react";
import {
  Header,
  Home,
  Quote,
  Project,
  Quote2,
  About,
  Contact,
} from "./components";
import "./scss/base.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <Quote
          title1="”ДЕЛАЙ ТО ЧТО ЛЮБИШЬ"
          title2="ЛЮБИТЕ ТО, ЧТО ВЫ ДЕЛАЕТЕ”"
          scrollOff="500"
          ScrollOn="750"
        />
        <Project />
        <Quote2
          title="”ЧТОБЫ ДОЙТИ ДО ЦЕЛИ, НАДО ИДТИ”"
          scrollOff="2550"
          ScrollOn="2750"
        />
        <About />
        <Quote
          title1="”Гораздо чаще люди сдаются"
          title2="чем терпят поражение”"
          scrollOff="4500"
          ScrollOn="4700"
        />
        <Contact />
      </main>
    </div>
  );
}

export default App;
