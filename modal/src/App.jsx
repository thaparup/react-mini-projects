import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100vw", zIndex: "100" }}>
      <button onClick={() => setOpen(!open)}>Open Modal</button>
      {open && <Modal openModal={open} closeModal={closeModal} />}
    </div>
  );
}

export default App;
