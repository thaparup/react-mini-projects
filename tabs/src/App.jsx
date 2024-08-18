import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tab from "./component/Tab";

const tabsData = [
  { tabTitle: "Tab 1", tabContent: " This is content of Tab 1" },
  { tabTitle: "Tab 2", tabContent: " This is content of Tab 2" },
  { tabTitle: "Tab 3", tabContent: " This is content of Tab 3" },
];
const tabsData1 = [
  { tabTile: "Tab 1" },
  { tabTile: "Tab 2" },
  { tabTile: "Tab 3" },
];

function App() {
  return (
    <>
      <div style={{}}>
        <Tab data={tabsData} />
      </div>
    </>
  );
}

export default App;
