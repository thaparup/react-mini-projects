import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data } from "./constants/data";

function App() {
  const [count, setCount] = useState(0);
  const sectionsRef = useRef([]);
  const href = useRef(null);

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleScrollBottom() {
    href.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleRef(ele, index) {
    sectionsRef.current[index] = ele;
  }
  sectionsRef.current.map((ele, index) =>
    console.log(`Index number ${index} is `, ele)
  );
  const scrollToSection = (index) => {
    sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <button onClick={handleScrollBottom}>Scroll to the buttom</button>
      <button onClick={() => scrollToSection(1)}>Scroll to Section Two</button>
      <button onClick={() => scrollToSection(2)}>
        Scroll to Section Three
      </button>
      <button onClick={() => scrollToSection(3)}>Scroll to Section Four</button>
      <button onClick={() => scrollToSection(4)}>Scrool to Section Five</button>
      {data?.map((ele, index) => (
        <div key={index} style={ele.style} ref={(ele) => handleRef(ele, index)}>
          <h1>{ele.title}</h1>
          <p>{index}</p>
        </div>
      ))}
      <button onClick={handleScrollTop} ref={href}>
        Scroll to the top
      </button>
    </>
  );
}

export default App;
