import React from "react";
import "../scss/quote.scss";
import "../scss/mediaQuote.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Quote({ title1, title2 }) {
  const hexagramOne = React.useRef(null);
  const hexagramTwo = React.useRef(null);
  const Text1 = React.useRef(null);
  const Text2 = React.useRef(null);
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
    gsap.to(Text2.current, {
      scrollTrigger: {
        start: "center bottom",
        trigger: Text2.current,
        toggleActions: "restart none none none",
      },
      scale: 1,
      opacity: 1,
      duration: 1,
    });
  }, []);
  return (
    <section className="quote">
      <div className="quote__triangle">
        <svg
          width="487"
          height="421"
          viewBox="0 0 487 421"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M469.1 10.25L243.5 401L17.9004 10.25L469.1 10.25Z"
            stroke="#6FFF2C"
            strokeWidth="20"
          />
        </svg>
        <div className="quote__triangle__div1" ref={Text1}>
          <p>{title1}</p>
        </div>
        <div className="quote__triangle__div2" ref={Text2}>
          <p>{title2}</p>
        </div>
      </div>
      <div className="quote__hexagram_one" ref={hexagramOne}>
        <svg
          width="260"
          height="300"
          viewBox="0 0 260 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.42632 222.5L130 5.00001L255.574 222.5H4.42632Z"
            stroke="url(#paint0_linear)"
            strokeWidth="5"
          />
          <path
            d="M255.574 77.5L130 295L4.42633 77.5L255.574 77.5Z"
            stroke="url(#paint1_linear)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="130"
              y1="0"
              x2="130"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1C1C1C" />
              <stop offset="1" stopColor="#FF951D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="130"
              y1="300"
              x2="130"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF951D" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="quote__hexagram_two" ref={hexagramTwo}>
        <svg
          width="260"
          height="300"
          viewBox="0 0 260 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.42632 222.5L130 5.00001L255.574 222.5H4.42632Z"
            stroke="url(#paint0_linear)"
            strokeWidth="5"
          />
          <path
            d="M255.574 77.5L130 295L4.42633 77.5L255.574 77.5Z"
            stroke="url(#paint1_linear)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="130"
              y1="0"
              x2="130"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1C1C1C" />
              <stop offset="1" stopColor="#FF951D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="130"
              y1="300"
              x2="130"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF951D" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Quote;
