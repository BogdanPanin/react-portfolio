import React from "react";
import "../scss/project.scss";
import "../scss/mediaProject.scss";
import ProjectBlock from "./ProjectBlock";

function Project() {
  return (
    <section className="project">
      <a name="project"></a>
      <p className="project__header">&lt;projects&gt;</p>
      <ProjectBlock
        title="Сайт визитка"
        description="Высокопроизводительный, отзывчивый веб-сайт, который использует возможности творческой анимации."
        url=""
      />
      <ProjectBlock
        title="J. Alissa"
        description="Высокопроизводительный, красивый Lending page который использует формы отправки данных и адаптирован под мобильные устройства."
        url="https://bogdanpanin.github.io/react-lending-page/"
      />
      <ProjectBlock
        title="Соль и перец"
        description="Небольшой блог о еде адаптирован под мобильные устройства."
        url="https://bogdanpanin.github.io/react-restaurant/"
      />
      <ProjectBlock
        title="React Pizza"
        description="Высокопроизводительный , отзывчивый интернет магазин пиццы адаптированный под мобильные устройства."
        url="https://bogdanpanin.github.io/react-pizza/"
      />
      <p className="project__header">&lt;/projects&gt;</p>
    </section>
  );
}

export default Project;
