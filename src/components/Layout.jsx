import poTheCat from "../assets/po_holding.svg";
import logo from "../assets/logo.svg";

export function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          width: "30%",
          height: "100%",
          position: "relative",
        }}
      >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
          width: "70%",
          paddingBottom: "100px",
        }}
      >
        <img src={logo} alt="Save Po the Cat" width={500} />
        <p className="highlight">
          The aim of the game is simple! Guess the letters and find the missing
          word or words.
        </p>
        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "16px",
            color: "rgb(135 135 135)",
          }}
        >
          <li style={{ paddingLeft: "10px" }}>
            Use your keyboard to guess a letter one at a time, hit{" "}
            <strong className="highlight">Enter ⮐</strong> to lock in your
            answer
          </li>
          <li style={{ paddingLeft: "10px" }}>
            If your carefully selected letter exists in the answer, then all
            places in the answer where that letter appear will be revealed
          </li>
          <li style={{ paddingLeft: "10px" }}>
            Every time you guess a letter wrong Po falls closer and closer to
            doom.
          </li>
          <li style={{ paddingLeft: "10px" }}>
            <strong style={{ color: "#000" }}>Careful...</strong> You only get 9
            failed attempts to solve the puzzle... or Po falls to the void
          </li>
        </ol>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "60px",
            gap: "4px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
