import React from "react";
import "./CharacterComponent.scss";
import hart from "./hartje.jpg";
import { ICharacter } from "../../types/CharacterTypes";

export const CharacterComponent = (results: ICharacter) => {
  const { id, image, name, status, species, gender } = results;
  return (
    <div className="character-component">
      <div className="container__main">
        <article className="article-detail article1">
          <h3 className="article-detail__header">{id}</h3>
          <figure>
            <img src={image} alt="" className="article-detail__img" />
            <figcaption className="article-detail__text">
              wat is beter article 1 of article 2 (semantisch?)
            </figcaption>
          </figure>
          <div className="article-detail__footer">
            <img src={hart} alt="" className="article-detail__footer__img" />
            <span className="article-detail__footer__kopen">
              {" "}
              <span className="article-detail__footer__kopen__plus">
                +
              </span>{" "}
              Deze wil ik
            </span>
          </div>
        </article>
        <article>
          <ul>
            <li>Itemnr: {id}</li>
            <li>Naam kunstenaar: {name}</li>
            <li>Species: {species}</li>

            <li>Status: {status}</li>

            <li>Gender: {gender}</li>
          </ul>
        </article>
      </div>
    </div>
  );
};
