import { useEffect, useState } from "react";
import "./App.css";
import MyComponent from "./component/MyComponent";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState({ theme: "light" });
  useEffect(() => {
    const local = localStorage.getItem("theme");
    if (local) {
      setTheme(JSON.parse(local));
    } else {
      localStorage.setItem("theme", JSON.stringify({ theme: "light" }));
      const local = localStorage.getItem('theme')
      if (local) {
        setTheme(JSON.parse(local))
      }
    }
  }, []);

  console.log(theme)
  return (
    <div data-theme={theme.theme}>
      <h1>{theme.theme}</h1>
      <button type="button" onClick={() => {
        const newTheme = theme.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", JSON.stringify({ theme: newTheme }));
        setTheme({ theme: newTheme });
      }}>Switch</button>
      <ThemeContextProvider>
        <MyComponent />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
