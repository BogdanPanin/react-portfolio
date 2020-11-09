import React from "react";

function HomeOctagon() {
  const [offsetX, setOffsetX] = React.useState("");
  const [offsetY, setOffsetY] = React.useState("");
  const mouseHandler = (e) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
    } else {
      let followX = window.innerWidth / 2 - e.clientX;
      let followY = window.innerHeight / 2 - e.clientY;
      let x = 0,
        y = 0;
      x += ((-followX - x) * 1) / 32;
      y += ((followY - y) * 1) / 32;
      setOffsetX(x);
      setOffsetY(y);
    }
  };
  let offset = {
    transform: `rotateY(${offsetX}deg)
                rotateX(${offsetY}deg)`,
  };
  React.useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);
  }, []);

  return (
    <div className="home__perspective" style={offset}>
      <svg
        id="purpleBack0"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(234px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="439.9,437.4,595,246.3,359.5,297.9"
        ></polygon>
      </svg>
      <svg
        id="purpleFront0"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(169px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="344.6,1.3000000000000114,189.4,192.5,425,140.8"
        ></polygon>
      </svg>
      <svg
        id="greenBack0"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(5px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="626.6,491.8,486.2,318.9,699.3,365.7"
        ></polygon>
      </svg>
      <svg
        id="greenFront0"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(21px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="712.7,97.30000000000001,853.2,270.2,640,223.5"
        ></polygon>
      </svg>
      <svg
        id="yellowBack0"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(8px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="78.5,543.9,5.5,454,116.4,478.3"
        ></polygon>
      </svg>
      <svg
        id="yellowFront0"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(190px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="123.30000000000001,338.8,196.4,428.7,85.5,404.4"
        ></polygon>
      </svg>
      <svg
        id="purpleBack1"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(59px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="439.9,437.4,595,246.3,604.7,287"
        ></polygon>
      </svg>
      <svg
        id="purpleFront1"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(91px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="344.6,1.3000000000000114,189.39999999999998,192.5,179.8,151.7"
        ></polygon>
      </svg>
      <svg
        id="greenBack1"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(117px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="626.6,491.8,486.2,318.9,477.4,355.7"
        ></polygon>
      </svg>
      <svg
        id="greenFront1"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(105px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="712.7,97.29999999999998,853.2,270.2,861.9,233.4"
        ></polygon>
      </svg>
      <svg
        id="yellowBack1"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(205px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="78.5,543.9,5.5,454,1,473.2"
        ></polygon>
      </svg>
      <svg
        id="yellowFront1"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(28px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="123.29999999999995,338.8,196.39999999999998,428.7,200.89999999999998,409.5"
        ></polygon>
      </svg>
      <svg
        id="purpleBack2"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(48px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="440.2,437.3,359.5,297.9,227.6,369.7"
        ></polygon>
      </svg>
      <svg
        id="purpleFront2"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(4px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="344.2,1.3999999999999773,425,140.8,556.9,69"
        ></polygon>
      </svg>
      <svg
        id="greenBack2"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(56px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="626.2,491.7,699.3,365.7,818.7,430.6"
        ></polygon>
      </svg>
      <svg
        id="greenFront2"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(136px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="713.1,97.40000000000003,640,223.5,520.7,158.5"
        ></polygon>
      </svg>
      <svg
        id="yellowBack2"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(89px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="78.40000000000003,543.9,116.4,478.3,178.4,512.1"
        ></polygon>
      </svg>
      <svg
        id="yellowFront2"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(119px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="123.5,338.8,85.5,404.4,23.5,370.6"
        ></polygon>
      </svg>
      <svg
        id="purpleBack3"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(19px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="604.7,287,595,246.3,556.9,69"
        ></polygon>
      </svg>
      <svg
        id="purpleFront3"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(235px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="179.79999999999995,151.7,189.39999999999998,192.5,227.60000000000002,369.7"
        ></polygon>
      </svg>
      <svg
        id="greenBack3"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(3px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="477.4,355.7,486.2,318.9,520.7,158.5"
        ></polygon>
      </svg>
      <svg
        id="greenFront3"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(209px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="861.9,233.4,853.2,270.2,818.7,430.6"
        ></polygon>
      </svg>
      <svg
        id="yellowBack3"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(165px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="1,473.2,5.5,454,23.5,370.6"
        ></polygon>
      </svg>
      <svg
        id="yellowFront3"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(53px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="200.89999999999998,409.5,196.39999999999998,428.7,178.39999999999998,512.1"
        ></polygon>
      </svg>
      <svg
        id="purpleBack4"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(57px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="227.60000000000002,369.7,359.5,297.9,179.7,151.7"
        ></polygon>
      </svg>
      <svg
        id="purpleFront4"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(184px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="556.9,69,425,140.8,604.7,287"
        ></polygon>
      </svg>
      <svg
        id="greenBack4"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(55px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="818.7,430.6,699.3,365.7,861.9,233.4"
        ></polygon>
      </svg>
      <svg
        id="greenFront4"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(152px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="520.7,158.5,640,223.5,477.4,355.7"
        ></polygon>
      </svg>
      <svg
        id="yellowBack4"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(39px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="178.39999999999998,512.1,116.39999999999998,478.3,200.9,409.5"
        ></polygon>
      </svg>
      <svg
        id="yellowFront4"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(9px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="23.5,370.6,85.5,404.4,1,473.2"
        ></polygon>
      </svg>
      <svg
        id="purpleBack5"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(21px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="595,246.3,432.2,67.80000000000001,359.5,297.9"
        ></polygon>
      </svg>
      <svg
        id="purpleFront5"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(12px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="189.39999999999998,192.5,352.2,370.9,425,140.8"
        ></polygon>
      </svg>
      <svg
        id="greenBack5"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(13px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="486.2,318.9,633.5,157.4,699.3,365.7"
        ></polygon>
      </svg>
      <svg
        id="greenFront5"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(175px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="853.2,270.2,705.9,431.7,640,223.5"
        ></polygon>
      </svg>
      <svg
        id="yellowBack5"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(90px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="5.5,454,82.10000000000002,370.1,116.39999999999998,478.29999999999995"
        ></polygon>
      </svg>
      <svg
        id="yellowFront5"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(233px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="196.39999999999998,428.7,119.79999999999995,512.7,85.5,404.4"
        ></polygon>
      </svg>
      <svg
        id="purpleBack6"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(111px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="556.9,69,432.2,67.80000000000001,595,246.3"
        ></polygon>
      </svg>
      <svg
        id="purpleFront6"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(171px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="227.60000000000002,369.7,352.2,370.9,189.39999999999998,192.5"
        ></polygon>
      </svg>
      <svg
        id="greenBack6"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(105px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="520.7,158.5,633.5,157.4,486.2,318.9"
        ></polygon>
      </svg>
      <svg
        id="greenFront6"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(168px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="818.7,430.6,705.9,431.7,853.2,270.2"
        ></polygon>
      </svg>
      <svg
        id="yellowBack6"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(124px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="23.5,370.6,82.10000000000002,370.1,5.5,454"
        ></polygon>
      </svg>
      <svg
        id="yellowFront6"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(194px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="178.39999999999998,512.1,119.79999999999995,512.7,196.39999999999998,428.7"
        ></polygon>
      </svg>
      <svg
        id="purpleBack7"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(22px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="179.7,151.7,432.6,67.69999999999999,359.5,297.9"
        ></polygon>
      </svg>
      <svg
        id="purpleFront7"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(117px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="604.7,287,351.9,371,425,140.8"
        ></polygon>
      </svg>
      <svg
        id="greenBack7"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(153px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="861.8999999999999,233.4,633.1,157.4,699.3,365.7"
        ></polygon>
      </svg>
      <svg
        id="greenFront7"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(122px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="477.4,355.7,706.2,431.8,640,223.5"
        ></polygon>
      </svg>
      <svg
        id="yellowBack7"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(66px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="200.9,409.5,81.90000000000003,370,116.40000000000003,478.29999999999995"
        ></polygon>
      </svg>
      <svg
        id="yellowFront7"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(42px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="1,473.2,119.90000000000003,512.7,85.5,404.4"
        ></polygon>
      </svg>
      <svg
        id="purpleBack8"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(152px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="432.6,67.69999999999999,344.2,1.3999999999999773,556.9,69"
        ></polygon>
      </svg>
      <svg
        id="purpleFront8"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(218px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="351.9,371,440.2,437.3,227.6,369.7"
        ></polygon>
      </svg>
      <svg
        id="greenBack8"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(40px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="633.1,157.4,713.1,97.4,520.7,158.5"
        ></polygon>
      </svg>
      <svg
        id="greenFront8"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(49px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="706.2,431.8,626.2,491.7,818.7,430.6"
        ></polygon>
      </svg>
      <svg
        id="yellowBack8"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(95px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="81.90000000000003,370,123.5,338.8,23.5,370.6"
        ></polygon>
      </svg>
      <svg
        id="yellowFront8"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(148px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="119.9,512.7,78.40000000000003,543.9,178.4,512.1"
        ></polygon>
      </svg>
      <svg
        id="purpleBack9"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(158px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="432.2,67.80000000000001,344.6,1.3000000000000114,179.69999999999993,151.7"
        ></polygon>
      </svg>
      <svg
        id="purpleFront9"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(70px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#E40590"
          points="352.2,370.9,439.9,437.4,604.7,287"
        ></polygon>
      </svg>
      <svg
        id="greenBack9"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(16px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="633.5,157.4,712.7,97.30000000000001,861.9,233.4"
        ></polygon>
      </svg>
      <svg
        id="greenFront9"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(195px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#6FFF2C"
          points="705.9,431.7,626.6,491.8,477.4,355.7"
        ></polygon>
      </svg>
      <svg
        id="yellowBack9"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(117px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="82.10000000000002,370.1,123.29999999999995,338.8,200.89999999999998,409.5"
        ></polygon>
      </svg>
      <svg
        id="yellowFront9"
        viewBox="0 0 862.9 544.8"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="862.9px"
        height="544.8px"
        style={{ transform: " translateZ(62px)" }}
      >
        <desc>Created with Snap</desc>
        <defs></defs>
        <polygon
          fill="none"
          stroke="#FF951D"
          points="119.80000000000001,512.7,78.5,543.9,1,473.2"
        ></polygon>
      </svg>
    </div>
  );
}

export default HomeOctagon;
