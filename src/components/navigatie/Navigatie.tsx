import React from "react";
import { Link } from "react-router-dom";
import "./Navigatie.scss";

export const Navigatie = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="https://www.amsterdam.nl/views/core/images/logos/andreas.svg"
            className="logo__img"
            alt="Logo van de gemeente amsterdam"
          />

          <span className="logotexts">
            <span className="logotext">Gemeente</span>
            <span className="logotext">Amsterdam</span>
          </span>
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              Characters
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              Episodes
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              Location
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              contact
            </Link>
          </li>
        </ul>

        <ul className="navigation__zoek">
          <li className="navigation__item">
            <Link to="#" className="navigation__link">
              zoek
            </Link>
          </li>
          <img
            src="img/search-icon-black.svg"
            className="navigation__zoek__img"
            alt="Logo van de gemeente amsterdam"
          />
        </ul>
      </nav>
    </header>
  );
};
