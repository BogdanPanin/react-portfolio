import React from "react";
import "../scss/form.scss";

function Form() {
  const colorBtn = () => {
    let color =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
    const btn = document.querySelector(".btn");
    btn.style.fill = color;
  };
  setInterval(colorBtn, 1000);

  return (
    <form
      action="http://f95132tx.beget.tech/php/telegram.php"
      method="POST"
      className="form"
    >
      <input
        name="user_name"
        type="text"
        className="form__user"
        placeholder="Имя"
      ></input>
      <input
        name="user_email"
        type="email"
        className="form__email"
        placeholder="Email"
      ></input>
      <textarea
        name="user_message"
        type="text"
        className="form__message"
        placeholder="Сообщение"
      ></textarea>
      <button type="submit" className="form__submit">
        <svg
          className="btn"
          viewBox="0 0 27.8 32.1"
          x="0"
          y="0"
          width="48px"
          height="55px"
          fill="#ffffff"
          style={{ transition: "all 1s" }}
        >
          <path d="M0,32.1V0l27.8,16.1L0,32.1z M1,1.7v28.7l24.8-14.3L1,1.7z"></path>
          <path d="M5.3,22.6V9.5l11.3,6.5L5.3,22.6z M5.9,10.6v11l9.5-5.5L5.9,10.6z"></path>
        </svg>
      </button>
    </form>
  );
}

export default Form;
