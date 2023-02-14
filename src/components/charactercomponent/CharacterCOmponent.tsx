import React from "react";
import "./CharacterComponent.scss";
import hart from "./hartje.jpg";
import { ICharacter } from "../../types/CharacterTypes";

export const CharacterComponent = (results: ICharacter) => {
  const { id, image, name, status, species, gender } = results;
  return (
    //<div className="character-component">
    <div className="container__main">
      <article className="character-detail article1">
        <h3 className="character-detail__header">{name}</h3>
        <figure className="character-detail__figure">
          <img src={image} alt="" className="character-detail__figure__img" />
          {/* <figcaption className="character-detail__text">
              wat is beter article 1 of article 2 (semantisch?)
            </figcaption> */}
        </figure>
        <article>
          <ul>
            <li className="character-detail__eigenschap">Itemnr: {id}</li>
            <li className="character-detail__eigenschap">Naam: {name}</li>
            <li className="character-detail__eigenschap">Species: {species}</li>
            <li className="character-detail__eigenschap">Status: {status}</li>
            <li className="character-detail__eigenschap">Gender: {gender}</li>
          </ul>
        </article>

        <div className="character-detail__footer">
          <img src={hart} alt="" className="character-detail__footer__img" />
          <span className="character-detail__footer__kopen">
            {" "}
            <span className="character-detail__footer__kopen__plus">
              +
            </span>{" "}
          </span>
        </div>
      </article>
    </div>
    //</div>
  );
};
