import { useEffect, useRef } from "react";

const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }

    const currentElement = element.current;
    if (currentElement) {
      currentElement.addEventListener("mouseenter", onHover);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("mouseenter", onHover);
      }
    };
  });

  return element;
};

export default useHover;