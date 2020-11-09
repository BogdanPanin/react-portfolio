import React from "react";
import "../scss/header.scss";
import "../scss/mediaHeader.scss";
import Logo from "../assets/img/Logo.png";
import DropRightHeader from "./DropRightHeader";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo}></img>
      </div>
      <DropRightHeader />
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <a href="#home" className="header__a" data-text="Explore">
              Главная
            </a>
          </li>
          <li className="header__li">
            <a href="#project" className="header__a" data-text="Explore">
              Проекты
            </a>
          </li>
          <li className="header__li">
            <a href="#about" className="header__a" data-text="Explore">
              Обо мне
            </a>
          </li>
          <li className="header__li">
            <a href="#contact" className="header__a" data-text="Explore">
              Связаться со мною
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
