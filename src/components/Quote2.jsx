import React from "react";
import "../scss/quote.scss";
import "../scss/mediaQuote.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Quote2({ title, scrollOff, ScrollOn }) {
  const hexagramOne = React.useRef(null);
  const hexagramTwo = React.useRef(null);
  const Text1 = React.useRef(null);
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(hexagramOne.current, {
      scrollTrigger: {
        start: "center bottom",
        trigger: hexagramOne.current,
        toggleActions: "restart none none none",
      },
      x: -50,
      y: 50,
      rotate: 360,
      duration: 2,
    });
    gsap.to(hexagramTwo.current, {
      scrollTrigger: {
        trigger: hexagramTwo.current,
        start: "center bottom",
        toggleActions: "restart none none none",
      },
      x: 50,
      y: -50,
      rotate: 360,
      duration: 2,
    });
    gsap.to(Text1.current, {
      scrollTrigger: {
        start: "center bottom",
        trigger: Text1.current,
        toggleActions: "restart none none none",
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
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
        <div className="quotetwo__div3" ref={Text1}>
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
