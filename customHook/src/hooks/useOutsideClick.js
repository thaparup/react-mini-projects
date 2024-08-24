import { useEffect, useState } from "react";

const useOutsideClick = (ref) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const eventHandler = (event) => {
      // Check if the click is outside the ref element
      if (ref.current) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", eventHandler);
    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  }, [ref]);

  return { toggle, setToggle };
};

export default useOutsideClick;
