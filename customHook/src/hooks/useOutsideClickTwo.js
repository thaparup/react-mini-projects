import { useEffect, useRef, useState } from "react";

export default function useOutsideClickTwo(reference, cb) {
  useEffect(() => {
    const outSideClick = (event) => {
      if (reference.current && !reference.current.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener("mousedown", outSideClick);

    return () => {
      document.removeEventListener("mousedown", outSideClick);
    };
  }, []);
}
