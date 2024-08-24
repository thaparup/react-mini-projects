import { useEffect, useLayoutEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useFetch from "./hooks/useFetch";
import useOutsideClick from "./hooks/useOutsideClick";
import useOutsideClickTwo from "./hooks/useOutsideClickTwo";

function App() {
  const [toggle, setToggle] = useState(false);
  const buttonRef = useRef(null);
  useOutsideClickTwo(buttonRef, () => {
    if (toggle) {
      setToggle(false);
    }
  });
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    const functionToBeCalled = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", functionToBeCalled);
    return () => {
      window.removeEventListener("resize", functionToBeCalled);
    };
  }, [width]);
  console.log(width);
  return (
    <div ref={buttonRef} style={{ border: "2px solid black" }}>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      {toggle && (
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          exercitationem placeat perspiciatis omnis temporibus saepe officia
          accusamus commodi dicta libero.
        </h1>
      )}
      <h1>{width}</h1>
    </div>
  );
}

export default App;
