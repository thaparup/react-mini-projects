import React, { useEffect, useState } from "react";

const Tab = ({ tabTitle, tabContent, data }) => {
  const [indexState, setIndexState] = useState(0);

  const clickIndex = (index) => {
    setIndexState(index);
  };
  console.log(indexState);
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "500px",
        minWidth: "500px",
        justifyContent: "space-evenly",
        border: "2px solid red",
        minHeight: "500px",
      }}
    >
      {data.map((item, index) => (
        <div>
          <div
            className=""
            style={{
              border: index === indexState ? "5px solid purple" : "",
            }}
            onClick={() => clickIndex(index)}
          >
            {item.tabTitle}
          </div>
          {index === indexState ? (
            <div style={{}}>{item.tabContent}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Tab;
