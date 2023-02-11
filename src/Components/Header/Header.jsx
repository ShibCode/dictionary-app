import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBook, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import "./Header.css";

const Header = () => {
  const [font, changeFont] = useState("");
  const [darkTheme, toggleDarkTheme] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--variable-font", "Lora");
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.style.setProperty("--bg-color", "black");
      document.documentElement.style.setProperty("--input-color", "#1f1f1f");
      document.documentElement.style.setProperty("--primary-text", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--input-color", "#f2f2f2");
      document.documentElement.style.setProperty("--primary-text", "#202020");
    }
  }, [darkTheme]);

  const setFont = (font) => {
    document.documentElement.style.setProperty("--variable-font", font);
  };

  return (
    <div className="header">
      <div className="header__left">
        <FontAwesomeIcon icon={faBook} />
      </div>

      <div className="header__right">
        <button className="header__btn">
          <span>Lora</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>

        <button
          className="header__btn"
          onClick={() => {
            toggleDarkTheme((prev) => !prev);
          }}
        >
          <div
            className="toggle-theme-icon"
            style={{ backgroundColor: darkTheme ? "#7c18d9" : "gray" }}
          >
            <div
              className="toggle-theme-icon-circle"
              style={{ transform: darkTheme ? "translateX(22px)" : "" }}
            ></div>
          </div>

          <FontAwesomeIcon
            icon={faMoon}
            style={{ color: darkTheme ? "#7c18d9" : "black" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
