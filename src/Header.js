import React from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";
import useTitleName from "./hooks/useTitleName";

const Header = ({ title }) => {
  const { width } = useWindowSize();

  const t = useTitleName();

  return (
    <header className="Header">
      <h1>{t}</h1>
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
