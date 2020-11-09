import React from "react";
import "../scss/DropRightHeader.scss";
import "../scss/mediaHeader.scss";

function DropRightHeader() {
  let [visible, setVisible] = React.useState(false);
  const span = ["media__menu"];
  let isOpen = () => {
    setVisible(!visible);
  };
  if (visible === true) {
    span.push(" active");
  }
  return (
    <nav className="media__nav">
      <button
        id="btn"
        className={visible ? "media__button active" : "media__button"}
        onClick={() => isOpen()}
      >
        <span className="media__span"></span>
      </button>
      {visible ? (
        <div className="media__div">
          <ul id="menu" className="media__menu">
            <li className="media__item" onClick={() => isOpen()}>
              <a href="#home" className="media__a">
                Главная
              </a>
            </li>
            <li className="media__item" onClick={() => isOpen()}>
              <a href="#project" className="media__a">
                Проекты
              </a>
            </li>
            <li className="media__item" onClick={() => isOpen()}>
              <a href="#about" className="media__a">
                Обо мне
              </a>
            </li>
            <li className="media__item" onClick={() => isOpen()}>
              <a href="#contact" className="media__a">
                Связаться со мною
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <span></span>
      )}
    </nav>
  );
}

export default DropRightHeader;
