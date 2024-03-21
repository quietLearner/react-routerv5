import { useEffect, useState } from "react";

/*
this hook can be used in many places
 */
const useTitleName = () => {
  const [titleName, setTitleName] = useState("");

  useEffect(() => {
    const fetchTitleName = () => {
      return "React Blog";
    };

    setTimeout(() => {
      setTitleName(fetchTitleName);
    }, 2000);

    return () => {
      console.log("Clean up useTitleName, close all the connection etc...");
    };
  }, []);

  return titleName;
};

export default useTitleName;
