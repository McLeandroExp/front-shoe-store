import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreenFunc = () => {
    setScreenWidth(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeScreenFunc);
    return () => {
      window.removeEventListener("resize", resizeScreenFunc);
    };
  }, [screenWidth]);
  return { screenWidth };
};
