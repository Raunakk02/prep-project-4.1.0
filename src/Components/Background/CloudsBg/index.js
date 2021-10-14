import React, { useState, useEffect, useRef } from "react";
import CLOUDS2 from "vanta/dist/vanta.clouds2.min";
import noise from "../noise.png";
import "../background.css";

const CloudsBg = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS2({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          texturePath: noise,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="background" id="clouds" ref={myRef}>
      {children}
    </div>
  );
};

export default CloudsBg;