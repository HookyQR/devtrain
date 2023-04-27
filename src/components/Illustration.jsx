import React from "react";
import one from "../assets/po_holding.svg";
import two from "../assets/po_holding.svg";
import three from "../assets/po_holding.svg";
import four from "../assets/po_holding.svg";
import five from "../assets/po_holding.svg";
import six from "../assets/po_holding.svg";

const imgs = [one, two, three, four, five, six].reverse();

export function IllustrationWrapper({ lives }) {
  const [hangmanImage, setHangmanImage] = React.useState(null);
  React.useEffect(() => {
    lives && setHangmanImage(imgs[lives]);
  }, [lives]);

  return (
    <div className="illustration__wrapper ">
      <img
        src={hangmanImage}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
        }}
      />
    </div>
  );
}
