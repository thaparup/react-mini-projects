import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/search";
import Weather from "./components/weather";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   async function callApi() {
  //     const response = await fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=3294a0d15a248b25536ba062a0498a26"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }
  //   callApi();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          background: "#90D26D",
          width: "40%",
          height: "50vh",
          borderRadius: "10px",
          margin: "auto",
        }}
      >
        <Weather />
      </div>
    </div>
  );
}

export default App;
