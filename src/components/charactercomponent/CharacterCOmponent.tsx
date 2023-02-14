import React from "react";
import "./CharacterComponent.scss";
import { ICharacter } from "../../types/CharacterTypes";

export const CharacterComponent = (results: ICharacter) => {
  const { id, image } = results;
  return (
    <div className="character-component">
      {id} {image}
    </div>
  );
};
