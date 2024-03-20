import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerWidth });
    };

    handleResize();

    //whenver window resize, call the resize again
    window.addEventListener("resize", handleResize);

    //remove it to prevent memory leak
    const cleanUp = () => {
      console.log("run if useEffect dependency changes");

      window.removeEventListener("resize", handleResize);
    };

    return cleanUp;
  }, []); //run at load time

  return windowSize;
};

export default useWindowSize;
