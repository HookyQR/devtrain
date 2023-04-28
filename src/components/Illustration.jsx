import { useState, useEffect } from "react";
import one from "../assets/po/one.svg";
import two from "../assets/po/two.svg";
import three from "../assets/po/three.svg";
import four from "../assets/po/four.svg";
import five from "../assets/po/five.svg";
import six from "../assets/po/six.svg";
import seven from "../assets/po/seven.svg";
import poFalling from "../assets/po/seven-two.svg";

const imgs = [one, two, three, four, five, six, seven].reverse();

export function IllustrationWrapper({ livesLeft }) {
  const [poImage, setPoImage] = useState(null);
  useEffect(() => {
    livesLeft && setPoImage(imgs[livesLeft]);
  }, [livesLeft]);

  return (
    <div className="illustration__wrapper">
      <img
        src={poImage}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
        }}
      />
      {livesLeft === 0 && (
        <img
          src={poFalling}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            margin: "0 auto",
            transform: livesLeft === 0 && "translate(0, 200vh)",
            transition: "2s ease-in-out",
          }}
        />
      )}
    </div>
  );
}
