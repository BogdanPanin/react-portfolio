import React from "react";
import "../scss/quote.scss";
import "../scss/mediaQuote.scss";

function Quote2({ title, scrollOff, ScrollOn }) {
  const hexagramOne = React.useRef("");
  const hexagramTwo = React.useRef("");
  const scrollHandler = (e) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let scroll = e.path[1].scrollY;
      if (scroll <= 100) {
        hexagramOne.current.style.transform =
          "translate(0px,0px) rotate(-45deg) scale(0.4)";
        hexagramTwo.current.style.transform =
          "translate(0px,0px) rotate(45deg) scale(0.4)";
      } else if (scroll >= 200) {
        hexagramOne.current.style.transform =
          "translate(-25px,25px) rotate(-45deg) scale(0.4)";
        hexagramTwo.current.style.transform =
          "translate(25px,-25px) rotate(45deg) scale(0.4)";
      }
    } else {
      let scroll = e.path[1].scrollY;
      if (scroll <= scrollOff) {
        hexagramOne.current.style.transform =
          "translate(0px,0px) rotate(-45deg) scale(0.8)";
        hexagramTwo.current.style.transform =
          "translate(0px,0px) rotate(45deg) scale(0.8)";
      } else if (scroll >= ScrollOn) {
        hexagramOne.current.style.transform =
          "translate(-50px,50px) rotate(-45deg) scale(0.8)";
        hexagramTwo.current.style.transform =
          "translate(50px,-50px) rotate(45deg) scale(0.8)";
      }
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <section className="quotetwo">
      <div className="quotetwo__triangle2">
        <svg
          width="487"
          height="421"
          viewBox="0 0 487 421"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9004 410.75L243.5 20L469.1 410.75H17.9004Z"
            stroke="#E40590"
            strokeWidth="20"
          />
        </svg>
        <div className="quotetwo__div3">
          <p>{title}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        className="quotetwo__hexagram_3"
        ref={hexagramOne}
      >
        <path
          d="M24.4263 222.5L150 5.00001L275.574 222.5H24.4263Z"
          stroke="url(#paint0_linear)"
          strokeWidth="5"
        />
        <path
          d="M275.574 77.5L150 295L24.4263 77.5L275.574 77.5Z"
          stroke="url(#paint1_linear)"
          strokeWidth="5"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="150"
            y1="0"
            x2="150"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C1C1C" />
            <stop offset="1" stopColor="#6FFF2C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="150"
            y1="300"
            x2="150"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6FFF2C" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        className="quotetwo__hexagram_4"
        ref={hexagramTwo}
      >
        <path
          d="M24.4263 222.5L150 5.00001L275.574 222.5H24.4263Z"
          stroke="url(#paint0_linear)"
          strokeWidth="5"
        />
        <path
          d="M275.574 77.5L150 295L24.4263 77.5L275.574 77.5Z"
          stroke="url(#paint1_linear)"
          strokeWidth="5"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="150"
            y1="0"
            x2="150"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C1C1C" />
            <stop offset="1" stopColor="#6FFF2C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="150"
            y1="300"
            x2="150"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6FFF2C" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

export default Quote2;
