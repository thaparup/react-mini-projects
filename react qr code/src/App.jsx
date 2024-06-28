import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  return (
    <>
      <h1>Qr code generator</h1>
      <div>
        <input
          type="text"
          placeholder="conver into qr"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            setQrValue(input);
          }}
        >
          Generate
        </button>
      </div>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        viewBox={`0 0 256 256`}
        value={qrValue}
      />
    </>
  );
}

export default App;
