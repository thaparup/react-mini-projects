import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [selectRgbColor, setSelectRgbColor] = useState(false);

  const [generateRandomColor, setGenerateRandomColor] = useState(`#11F111`);
  const hexPossibleValues = 'ABCDEF0123456789';

  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: `${generateRandomColor}` }}
    >
      <div className="flex justify-center gap-4">
        <button
          className="text-white p-2 bg-slate-500"
          onClick={() => setSelectRgbColor(!selectRgbColor)}
        >
          Select Hex Color
        </button>
        <button
          className="text-white p-2 bg-slate-500"
          onClick={() => setSelectRgbColor(!selectRgbColor)}
        >
          Select Rgb Color
        </button>
        <button
          className="text-white p-2 bg-slate-500"
          onClick={() => {
            selectRgbColor
              ? setGenerateRandomColor(
                ` rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
              )
              : setGenerateRandomColor(
                `#${hexPossibleValues.charAt(Math.round(Math.random() * 16))}${hexPossibleValues.charAt(Math.round(Math.random() * 16))}${hexPossibleValues.charAt(Math.round(Math.random() * 16))}${hexPossibleValues.charAt(Math.round(Math.random() * 16))}${hexPossibleValues.charAt(Math.round(Math.random() * 16))}${hexPossibleValues.charAt(Math.round(Math.random() * 16))}`
              );
          }}
        >
          Generate Random Color
        </button>
      </div>
      <h1 className="text-6xl text-center font-medium m-20 text-red-600">
        {generateRandomColor}
      </h1>
    </div>
  );
}

export default App;
