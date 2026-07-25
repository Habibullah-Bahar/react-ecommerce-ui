import React, { useEffect, useState } from "react";
import lightBtn from "../../assets/light-mode-button.png";
import darkbtn from "../../assets/dark-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={darkbtn}
        alt="Dark"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px,1px,1px,rgba(0,0,0,0.1)] transition-all duration-500 absolute right-0 z-10 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
      <img
        src={lightBtn}
        alt="Light"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-12 cursor-pointer drop-shadow-[1px,1px,1px,rgba(0,0,0,0.1)] transition-all duration-500  "
      />
    </div>
  );
};

export default Darkmode;
