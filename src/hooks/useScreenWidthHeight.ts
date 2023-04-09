import { useEffect, useState } from "react";

export const useScreenWidthHeight = () => {
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
  const [screenHeight, setScreenHeight] = useState(document.body.clientHeight);
  const resizeScreenFunc = () => {
    setScreenWidth(document.body.clientWidth);
    setScreenHeight(document.body.clientHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeScreenFunc);
    return () => {
      window.removeEventListener("resize", resizeScreenFunc);
    };
  }, [screenWidth, screenHeight]);
  return { screenWidth, screenHeight };
};
