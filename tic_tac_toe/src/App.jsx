import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [toggler, setToggler] = useState(false);
  const [result, setResult] = useState("");
  const handleClickOnTheGridBox = (arrayElementIndex) => {
    if (squares[arrayElementIndex]) {
      return;
    }
    let arr = [...squares];

    if (!result) {
      arr[arrayElementIndex] = toggler ? "O" : "X";
      setSquares(arr);
      setToggler(!toggler);
    }
  };

  const getWinner = (squares) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];

      if (squares[a] === squares[b] && squares[b] === squares[c])
        return squares[a];
    }
  };
  console.log(getWinner(squares));

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== ""))
      setResult("Draw");
    else if (getWinner(squares)) {
      setResult(`The winner is ${getWinner(squares)}`);
    }
  }, [squares]);
  return (
    <>
      <div
        style={{
          display: "grid",
          border: "2px solid white",
          minHeight: "500px",
          minWidth: "500px",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "1fr 1fr 1fr",
        }}
      >
        <Square
          value={squares[0]}
          onClickHandler={() => handleClickOnTheGridBox(0)}
        />
        <Square
          value={squares[1]}
          onClickHandler={() => handleClickOnTheGridBox(1)}
        />
        <Square
          value={squares[2]}
          onClickHandler={() => handleClickOnTheGridBox(2)}
        />
        <Square
          value={squares[3]}
          onClickHandler={() => handleClickOnTheGridBox(3)}
        />
        <Square
          value={squares[4]}
          onClickHandler={() => handleClickOnTheGridBox(4)}
        />
        <Square
          value={squares[5]}
          onClickHandler={() => handleClickOnTheGridBox(5)}
        />
        <Square
          value={squares[6]}
          onClickHandler={() => handleClickOnTheGridBox(6)}
        />
        <Square
          value={squares[7]}
          onClickHandler={() => handleClickOnTheGridBox(7)}
        />
        <Square
          value={squares[8]}
          onClickHandler={() => handleClickOnTheGridBox(8)}
        />
      </div>
      {!result ? (
        <h1>Next layer is {!toggler ? "X" : "O"}</h1>
      ) : (
        <h1>{result}</h1>
      )}

      {result && (
        <button
          onClick={() => {
            setSquares(Array(9).fill(""));
            setResult("");
          }}
        >
          Reset
        </button>
      )}
    </>
  );
}

function Square({ value, onClickHandler }) {
  return (
    <button className="row" onClick={onClickHandler}>
      {value}
    </button>
  );
}

export default App;
