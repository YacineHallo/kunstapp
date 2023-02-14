import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";

export const HomeView = () => {
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCharacters = async () => {
    setLoading(true);
    try {
      const api = `https://rickandmortyapi.com/api/character`;
      const res = await await fetch(`${api}`);
      const resJson: ICharactersResponse = await res.json();
      console.log("res ", resJson);
      //@ts-ignore
      setCharacter(resJson.results);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <PageWrapper isLoading={loading}>
      <div className="container__main">
        {character.map((perCharacter: JSX.IntrinsicAttributes & ICharacter) => (
          <CharacterComponent {...perCharacter} key={perCharacter.id} />
        ))}
      </div>
    </PageWrapper>
  );
};
