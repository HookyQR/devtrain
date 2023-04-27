import poTheCat from "../assets/po_holding.svg";

export function IllustrationWrapper() {
  return (
    <div className="illustration__wrapper ">
      <img
        src={poTheCat}
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
