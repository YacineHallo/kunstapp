import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.scss";

export const Navigatie = () => {
  return (
    <header className="header">
      <NavLink to="/">
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
      </NavLink>
      <nav className="header__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/characters" className="navigation__link">
              Characters
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              Episodes
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              Location
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              contact
            </NavLink>
          </li>
        </ul>

        <ul className="navigation__zoek">
          <li className="navigation__item">
            <NavLink to="#" className="navigation__link">
              zoek
            </NavLink>
          </li>
          <img
            src="https://www.amsterdam.nl/views/core/images/svg/search-icon-black.svg"
            className="navigation__zoek__img"
            alt="Zoek knop"
          />
        </ul>
      </nav>
    </header>
  );
};
